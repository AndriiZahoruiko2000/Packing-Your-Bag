"use client";

import { useThingsList } from "@/hooks/useThingsList";
import css from "./ThingsList.module.css";
import ThingsItem from "../ThingsItem/ThingsItem";

interface ThingsListProps {
  categoryId: string;
}

const ThingsList = ({ categoryId }: ThingsListProps) => {
  const thingsList = useThingsList(categoryId);

  return (
    <div className={css["thingsList"]}>
      <div className={css["header"]}>
        <p className={css["title"]}>Речі в цій категорії</p>
        <p className={css["count"]}>{thingsList.length} шт.</p>
      </div>

      <ul className={css["list"]}>
        {thingsList.map((thing) => {
          return <ThingsItem key={thing.id} thing={thing} />;
        })}

        {thingsList.length === 0 && (
          <li className={css["emptyState"]}>
            Додай першу річ у цю категорію, щоб почати пакування.
          </li>
        )}
      </ul>
    </div>
  );
};

export default ThingsList;
