import styles from "./ErrorMessage.module.css";
import { ErrorMessageProps } from "../../App.types";

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return <div className={styles.error}>{message}</div>;
}
