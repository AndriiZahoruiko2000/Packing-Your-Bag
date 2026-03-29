import { CategoryItem, PackingListItem, Things } from "@/types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface PackingStore {
  thingsList: Things[];
  categoryList: CategoryItem[];
  packingList: PackingListItem[];
  addPackingListItem: (packingListItem: PackingListItem) => void;
  removePackingListItem: (id: string) => void;
  addCategoryItem: (categoryItem: CategoryItem) => void;
  removeCategoryItem: (id: string) => void;
  addThings: (things: Things) => void;
  removeThings: (id: string) => void;
  updatePackingList: (id: string, body: PackingListItem) => void;
  toggleStatus: (id: string) => void;
}

export const usePackingStore = create<PackingStore>()(
  persist(
    (setStore) => {
      return {
        packingList: [],
        addPackingListItem: (packingListItem) => {
          setStore((store) => {
            return {
              packingList: [...store.packingList, packingListItem],
            };
          });
        },
        removePackingListItem(id) {
          setStore((store) => {
            return {
              packingList: store.packingList.filter((el) => el.id !== id),
            };
          });
        },

        updatePackingList: (id, body) => {
          setStore((store) => {
            const index = store.packingList.findIndex((el) => el.id === id);
            const copyElement = {
              ...store.packingList[index],
              ...body,
            };
            const copyArray = [...store.packingList];
            copyArray[index] = copyElement;
            return {
              packingList: copyArray,
            };
          });
        },

        toggleStatus: (id) => {
          setStore((store) => {
            const index = store.thingsList.findIndex((el) => el.id === id);
            const copyArray = [...store.thingsList];
            copyArray[index].isPacked = !copyArray[index].isPacked;

            return {
              thingsList: copyArray,
            };
          });
        },

        categoryList: [],
        addCategoryItem(categoryItem) {
          setStore((store) => {
            return {
              categoryList: [...store.categoryList, categoryItem],
            };
          });
        },

        removeCategoryItem(id) {
          setStore((store) => {
            return {
              categoryList: store.categoryList.filter((el) => el.id !== id),
            };
          });
        },

        thingsList: [],
        addThings: (things) => {
          setStore((store) => {
            return {
              thingsList: [...store.thingsList, things],
            };
          });
        },

        removeThings: (id) => {
          setStore((store) => {
            return {
              thingsList: store.thingsList.filter((el) => el.id !== id),
            };
          });
        },
      };
    },
    { name: "packing-store" },
  ),
);
