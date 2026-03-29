import PackingListInfo from "@/components/PackingListInfo/PackingListInfo";
import css from "./Page.module.css";
import CategoryListForm from "@/components/CategoryListForm/CategoryListForm";
import CategoryList from "@/components/CategoryList/CategoryList";

const Page = () => {
  return (
    <div className={css["page"]}>
      <PackingListInfo />
      <CategoryListForm />
      <CategoryList />
    </div>
  );
};

export default Page;
