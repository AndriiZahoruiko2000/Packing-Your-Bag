"use client";
import { usePackingStore } from "@/stores/store";
import css from "./PackingList.module.css";
import Link from "next/link";

const PackingList = () => {
  const packingList = usePackingStore((s) => s.packingList);

  return (
    <section className={css["packingList"]}>
      <div className={css["header"]}>
        <p className={css["eyebrow"]}>Saved lists</p>
        <h2 className={css["title"]}>Your packing lists</h2>
        <p className={css["subtitle"]}>
          Keep trip ideas organized and open any list to continue planning.
        </p>
      </div>

      <ul className={css["grid"]}>
        {packingList.map((el) => {
          return (
            <li key={el.id} className={css["item"]}>
              <Link href={`/list-packing/${el.id}`} className={css["card"]}>
                <div className={css["cardAccent"]} />
                <p className={css["cardTitle"]}>{el.title}</p>
                <p className={css["cardDescription"]}>{el.description}</p>
                <span className={css["cardAction"]}>Open list</span>
              </Link>
            </li>
          );
        })}

        {packingList.length === 0 && (
          <li className={css["emptyState"]}>
            <p className={css["emptyTitle"]}>No lists yet</p>
            <p className={css["emptyText"]}>
              Create your first packing list to start organizing essentials.
            </p>
          </li>
        )}
      </ul>
    </section>
  );
};

export default PackingList;
