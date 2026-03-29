"use client";
import { useId } from "react";
import css from "./PackingListForm.module.css";
import { v4 as uuidv4 } from "uuid";
import { usePackingStore } from "@/stores/store";

const PackingListForm = () => {
  const addPackingListItem = usePackingStore((s) => s.addPackingListItem);

  const id = useId();

  const handleSubmit = (formData: FormData) => {
    const id = uuidv4();
    const listName = formData.get("list-name") as string;
    const description = formData.get("description") as string;
    addPackingListItem({
      id,
      title: listName,
      description,
    });
  };

  return (
    <section className={css["packingListForm"]}>
      <div className={css["content"]}>
        <div className={css["intro"]}>
          <p className={css["eyebrow"]}>Планувальник подорожей</p>
          <h1 className={css["title"]}>Створи список речей без зайвого хаосу</h1>
          <p className={css["description"]}>
            Додай назву списку та короткий опис поїздки. Так буде простіше
            структурувати речі ще до заповнення категорій.
          </p>
        </div>

        <form action={handleSubmit} className={css["form"]}>
          <div className={css["field"]}>
            <label htmlFor={`${id}-list-name`}>Назва списку</label>
            <input
              type="text"
              name="list-name"
              id={`${id}-list-name`}
              placeholder="Вікенд у Берліні"
            />
          </div>

          <div className={css["field"]}>
            <label htmlFor={`${id}-description`}>Опис</label>
            <input
              type="text"
              name="description"
              id={`${id}-description`}
              placeholder="3 дні, лише ручна поклажа, весняна погода"
            />
          </div>

          <button type="submit" className={css["submitButton"]}>
            Створити список
          </button>
        </form>
      </div>
    </section>
  );
};

export default PackingListForm;
