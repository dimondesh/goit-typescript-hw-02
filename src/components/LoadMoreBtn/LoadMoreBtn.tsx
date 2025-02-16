import styles from "./LoadMoreBtn.module.css";
import { LoadMoreBtnProps } from "../../App.types";

export default function LoadMoreBtn({ onClick }: LoadMoreBtnProps) {
  return (
    <button onClick={onClick} className={styles.button}>
      Load more
    </button>
  );
}
