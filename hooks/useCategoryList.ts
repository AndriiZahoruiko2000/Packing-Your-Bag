"use client";
import { usePackingStore } from "@/stores/store";
import { usePackingId } from "./usePackingId";

export const useCategoryList = () => {
  const id = usePackingId();
  const categoryList = usePackingStore((s) => s.categoryList);
  const result = categoryList.filter((el) => el.packingListId === id);
  return result;
};
