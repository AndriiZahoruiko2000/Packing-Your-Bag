import css from "./Modal.module.css";

interface ModalProps {
  children: React.ReactNode;
  close: () => void;
}

const Modal = ({ children, close }: ModalProps) => {
  return (
    <div className={css["backdrop"]}>
      <div className={css["modal"]}>
        <button className={css["closeModal"]} onClick={close} type="button">
          Закрити
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
