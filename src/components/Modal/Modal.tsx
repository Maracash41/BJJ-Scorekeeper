import React from "react";
import classes from "./modal.module.css";
import { useLanguage } from "../../utils/LanguageContext";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const { getTranslation } = useLanguage();
  if (isOpen === false) return null;

  return (
    <div className={classes.modal} tabIndex={0}>
      <div className={classes.modalContent}>
        {children}
        <button className={classes.modalBtn} onClick={onClose}>
          {getTranslation("closeBtn")}
        </button>
      </div>
    </div>
  );
};

export default Modal;
