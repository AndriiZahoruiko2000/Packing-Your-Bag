"use client";

import { useCurrentPackingList } from "@/hooks/useCurrentPackingList";
import css from "./PackingListInfo.module.css";
import { usePackingStore } from "@/stores/store";
import { useRouter } from "next/navigation";
import { useModal } from "@/hooks/useModal";
import Modal from "../Modal/Modal";
import UpdatePackingListForm from "../UpdatePackingListForm/UpdatePackingListForm";

const PackingListInfo = () => {
  const [isOpenModal, openModal, closeModal] = useModal();
  const router = useRouter();
  const item = useCurrentPackingList();
  const deletePaxckingList = usePackingStore((s) => s.removePackingListItem);

  const handleDelete = () => {
    const id = item?.id;
    if (id) {
      deletePaxckingList(id);
      router.push("/list-packing");
    }
  };

  return (
    <section className={css["packingListInfo"]}>
      <p className={css["eyebrow"]}>Список речей</p>
      <h1 className={css["title"]}>{item?.title}</h1>
      <p className={css["description"]}>{item?.description}</p>
      <div className={css["actions"]}>
        <button onClick={openModal} className={css["updateButton"]} type="button">
          Оновити
        </button>
        <button onClick={handleDelete} className={css["deleteButton"]} type="button">
          Видалити
        </button>
      </div>
      {isOpenModal && (
        <Modal close={closeModal}>
          <UpdatePackingListForm
            packingListId={item?.id || ""}
            closeModal={closeModal}
          />
        </Modal>
      )}
    </section>
  );
};

export default PackingListInfo;
