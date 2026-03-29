"use client";

import { usePackingStore } from "@/stores/store";
import { useParams } from "next/navigation";

export const useCurrentPackingList = () => {
  const params = useParams();
  const id = params.id as string;

  const packingList = usePackingStore((s) => s.packingList);

  const item = packingList.find((el) => el.id === id);
  return item;
};
