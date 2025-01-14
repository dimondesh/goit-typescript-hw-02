import Modal from "react-modal";
import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

export default function ImageModal({ isOpen, onRequestClose, image }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <img
        className={styles.modalImage}
        src={image.urls.regular}
        alt={image.alt_description}
      />
      <button onClick={onRequestClose} className={styles.closeButton}>
        X
      </button>
    </Modal>
  );
}
