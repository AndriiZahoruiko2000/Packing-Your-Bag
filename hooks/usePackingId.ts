"use client";
import { useParams } from "next/navigation";

export const usePackingId = () => {
  const params = useParams();
  const id = params.id as string;
  return id;
};
