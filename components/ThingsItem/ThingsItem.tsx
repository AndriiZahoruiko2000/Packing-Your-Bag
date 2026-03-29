"use client";

import { Things } from "@/types/types";
import css from "./ThingsItem.module.css";
import { usePackingStore } from "@/stores/store";

interface ThingsItemProps {
  thing: Things;
}

const ThingsItem = ({ thing }: ThingsItemProps) => {
  const toggleStatus = usePackingStore((s) => s.toggleStatus);
  const removeThings = usePackingStore((s) => s.removeThings);

  const handleDelete = () => {
    removeThings(thing.id);
  };

  return (
    <li className={css["item"]}>
      <div className={css["main"]}>
        <button
          className={`${css["checkButton"]} ${
            thing.isPacked ? css["checkButtonActive"] : ""
          }`}
          type="button"
          onClick={() => {
            toggleStatus(thing.id);
          }}
        >
          {thing.isPacked ? "Packed" : "Check"}
        </button>

        <div className={css["content"]}>
          <p className={css["itemTitle"]}>{thing.title}</p>
          <p className={css["itemMeta"]}>
            {thing.isPacked ? "Packed and ready to go" : "Not packed yet"}
          </p>
        </div>
      </div>

      <div className={css["side"]}>
        <p className={css["quantityLabel"]}>Quantity</p>
        <p className={css["quantity"]}>x{thing.quantity}</p>
      </div>
      <button className={css["deleteButton"]} onClick={handleDelete} type="button">
        Delete Item
      </button>
    </li>
  );
};

export default ThingsItem;
