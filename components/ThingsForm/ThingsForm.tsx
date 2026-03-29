"use client";

import { useId } from "react";
import css from "./ThingsForm.module.css";
import { v4 as uuidv4 } from "uuid";
import { usePackingStore } from "@/stores/store";

interface ThingsFormProps {
  categoryId: string;
}

const ThingsForm = ({ categoryId }: ThingsFormProps) => {
  const id = useId();

  const addThings = usePackingStore((s) => s.addThings);

  const handleSubmit = (formData: FormData) => {
    const thingsData = {
      id: uuidv4(),
      title: formData.get("things-name") as string,
      quantity: Number(formData.get("things-quantity")),
      categoryId,
      isPacked: false,
    };

    addThings(thingsData);
  };

  return (
    <div className={css["thingsForm"]}>
      <form action={handleSubmit} className={css["form"]}>
        <div className={css["field"]}>
          <label htmlFor={`${id}-things-name`}>Thing name</label>
          <input
            type="text"
            name="things-name"
            id={`${id}-things-name`}
            placeholder="Toothbrush"
          />
        </div>

        <div className={css["field"]}>
          <label htmlFor={`${id}-things-quantity`}>Quantity</label>
          <input
            type="number"
            name="things-quantity"
            id={`${id}-things-quantity`}
            min="1"
            placeholder="1"
          />
        </div>

        <button type="submit" className={css["submitButton"]}>
          Add Thing
        </button>
      </form>
    </div>
  );
};

export default ThingsForm;
