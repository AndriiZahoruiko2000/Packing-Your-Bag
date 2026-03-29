"use client";

import CategoryCard from "../CategoryCard/CategoryCard";

import css from "./CategoryList.module.css";
import { useCategoryList } from "@/hooks/useCategoryList";

const CategoryList = () => {
  const categoryList = useCategoryList();

  return (
    <div className={css["categoryList"]}>
      <div className={css["header"]}>
        <p className={css["eyebrow"]}>Категорії</p>
        <h2 className={css["title"]}>Розклади важливі речі по розділах</h2>
      </div>

      <ul className={css["grid"]}>
        {categoryList.map((el) => {
          return (
            <li key={el.id} className={css["item"]}>
              <CategoryCard item={el} />
            </li>
          );
        })}

        {categoryList.length === 0 && (
          <li className={css["emptyState"]}>
            Створи першу категорію, щоб поділити речі на зрозумілі групи.
          </li>
        )}
      </ul>
    </div>
  );
};

export default CategoryList;
