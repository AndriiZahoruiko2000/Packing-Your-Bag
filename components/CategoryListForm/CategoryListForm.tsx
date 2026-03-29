"use client";
import { useId } from "react";
import css from "./CategoryListForm.module.css";
import { v4 as uuidv4 } from "uuid";
import { usePackingStore } from "@/stores/store";
import { usePackingId } from "@/hooks/usePackingId";

const CategoryListForm = () => {
  const id = useId();

  const packingId = usePackingId();

  const addCategoryItem = usePackingStore((s) => s.addCategoryItem);

  const handleSubmit = (formData: FormData) => {
    const id = uuidv4();
    const categoryName = formData.get("category-name") as string;
    addCategoryItem({
      id,
      title: categoryName,
      packingListId: packingId,
    });
  };

  return (
    <section className={css["categoryListForm"]}>
      <div className={css["intro"]}>
        <p className={css["eyebrow"]}>Структура</p>
        <h2 className={css["title"]}>Додай категорії перед заповненням речей</h2>
      </div>

      <form action={handleSubmit} className={css["form"]}>
        <div className={css["field"]}>
          <label htmlFor={`${id}-category-name`}>Назва категорії</label>
          <input
            type="text"
            name="category-name"
            id={`${id}-category-name`}
            placeholder="Документи, Одяг, Електроніка"
          />
        </div>
        <button type="submit" className={css["submitButton"]}>
          Створити категорію
        </button>
      </form>
    </section>
  );
};

export default CategoryListForm;
