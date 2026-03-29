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
        <p className={css["eyebrow"]}>Edit list</p>
        <h2 className={css["title"]}>Update packing list details</h2>
        <p className={css["description"]}>
          Change the list name or description and save the new version.
        </p>
      </div>

      <form action={handleSubmit} className={css["form"]}>
        <div className={css["field"]}>
          <label htmlFor={`${id}-list-name`}>List Name</label>
          <input
            type="text"
            name="list-name"
            id={`${id}-list-name`}
            placeholder="Weekend in Berlin"
          />
        </div>

        <div className={css["field"]}>
          <label htmlFor={`${id}-description`}>Description</label>
          <input
            type="text"
            name="description"
            id={`${id}-description`}
            placeholder="3 days, carry-on only, spring weather"
          />
        </div>

        <button type="submit" className={css["submitButton"]}>
          Update List
        </button>
      </form>
    </div>
  );
};

export default UpdatePackingListForm;
