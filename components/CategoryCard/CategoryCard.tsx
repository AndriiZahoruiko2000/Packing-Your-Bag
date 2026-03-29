"use client";
import { CategoryItem } from "@/types/types";
import css from "./CategoryCard.module.css";
import { useState } from "react";
import ThingsForm from "../ThingsForm/ThingsForm";
import ThingsList from "../ThingsList/ThingsList";

interface CategoryCardProps {
  item: CategoryItem;
}

const CategoryCard = ({ item }: CategoryCardProps) => {
  const [showList, setShowList] = useState(false);

  const toggle = () => {
    setShowList(!showList);
  };

  return (
    <div className={css["categoryItem"]}>
      <div className={css["categoryHeader"]}>
        <div className={css["categoryTitleBlock"]}>
          <p className={css["categoryLabel"]}>Категорія</p>
          <p className={css["categoryName"]}>{item.title}</p>
        </div>

        <button onClick={toggle} className={css["toggleButton"]} type="button">
          {showList ? "Сховати речі" : "Показати речі"}
        </button>
      </div>

      {showList && (
        <div className={css["categoryContent"]}>
          <ThingsForm categoryId={item.id} />
          <ThingsList categoryId={item.id} />
        </div>
      )}
    </div>
  );
};

export default CategoryCard;
