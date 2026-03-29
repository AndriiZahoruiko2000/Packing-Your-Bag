export interface PackingListItem {
  id: string;
  title: string;
  description: string;
}

export interface CategoryItem {
  id: string;
  title: string;
  packingListId: string;
}

export interface Things {
  id: string;
  title: string;
  quantity: number;
  categoryId: string;
  isPacked: boolean;
}
