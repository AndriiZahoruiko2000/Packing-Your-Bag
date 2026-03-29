"use client";
import { usePackingStore } from "@/stores/store";
import css from "./PackingList.module.css";
import Link from "next/link";

const PackingList = () => {
  const packingList = usePackingStore((s) => s.packingList);

  return (
    <section className={css["packingList"]}>
      <div className={css["header"]}>
        <p className={css["eyebrow"]}>Збережені списки</p>
        <h2 className={css["title"]}>Твої списки речей</h2>
        <p className={css["subtitle"]}>
          Тримай підготовку до поїздок у порядку та відкривай будь-який список,
          щоб продовжити планування.
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
                <span className={css["cardAction"]}>Відкрити список</span>
              </Link>
            </li>
          );
        })}

        {packingList.length === 0 && (
          <li className={css["emptyState"]}>
            <p className={css["emptyTitle"]}>Списків поки немає</p>
            <p className={css["emptyText"]}>
              Створи свій перший список речей, щоб почати підготовку до поїздки.
            </p>
          </li>
        )}
      </ul>
    </section>
  );
};

export default PackingList;
