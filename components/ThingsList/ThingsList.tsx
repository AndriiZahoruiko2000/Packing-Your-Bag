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
        <p className={css["title"]}>Things in this category</p>
        <p className={css["count"]}>{thingsList.length} items</p>
      </div>

      <ul className={css["list"]}>
        {thingsList.map((thing) => {
          return <ThingsItem key={thing.id} thing={thing} />;
        })}

        {thingsList.length === 0 && (
          <li className={css["emptyState"]}>
            Add your first item for this category to start packing.
          </li>
        )}
      </ul>
    </div>
  );
};

export default ThingsList;
