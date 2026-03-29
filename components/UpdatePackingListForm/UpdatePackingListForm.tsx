"use client";

import { useId } from "react";
import css from "./UpdatePackingListForm.module.css";
import { usePackingStore } from "@/stores/store";

interface UpdatePackingListFormProps {
  packingListId: string;
  closeModal: () => void;
}

const UpdatePackingListForm = ({
  packingListId,
  closeModal,
}: UpdatePackingListFormProps) => {
  const id = useId();

  const updatePackingListForm = usePackingStore((s) => s.updatePackingList);

  const handleSubmit = (formData: FormData) => {
    const data = {
      id: packingListId,
      title: formData.get("list-name") as string,
      description: formData.get("description") as string,
    };

    updatePackingListForm(packingListId, data);
    closeModal();
  };

  return (
    <div className={css["updatePackingListForm"]}>
      <div className={css["intro"]}>
        <p className={css["eyebrow"]}>Редагування списку</p>
        <h2 className={css["title"]}>Онови дані списку речей</h2>
        <p className={css["description"]}>
          Зміни назву або опис списку та збережи оновлену версію.
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
          Оновити список
        </button>
      </form>
    </div>
  );
};

export default UpdatePackingListForm;
