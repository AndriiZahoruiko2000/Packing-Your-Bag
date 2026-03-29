"use client";
import { usePackingStore } from "@/stores/store";

export const useThingsList = (categoryId: string) => {
  const thingsList = usePackingStore((s) => s.thingsList);

  const result = thingsList.filter((thing) => thing.categoryId === categoryId);
  return result;
};
