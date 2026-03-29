import PackingListForm from "@/components/PackingListForm/PackingListForm";
import css from "./Page.module.css";
import PackingList from "@/components/PackingList/PackingList";

const Page = () => {
  return (
    <div className={css["page"]}>
      <PackingListForm />
      <PackingList />
    </div>
  );
};

export default Page;
