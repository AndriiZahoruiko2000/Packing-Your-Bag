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
          <p className={css["eyebrow"]}>Travel planner</p>
          <h1 className={css["title"]}>Create a packing list that stays clear</h1>
          <p className={css["description"]}>
            Add a list name and short context for the trip. Keep everything ready
            before you start filling items.
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
            Create List
          </button>
        </form>
      </div>
    </section>
  );
};

export default PackingListForm;
