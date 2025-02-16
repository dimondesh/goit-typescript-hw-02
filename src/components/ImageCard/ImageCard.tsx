import styles from "./ImageCard.module.css";
import { ImageCardProps } from "../../App.types";

export default function ImageCard({ image, onImageClick }: ImageCardProps) {
  return (
    <div className={styles.card} onClick={() => onImageClick(image)}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={styles.image}
      />
    </div>
  );
}
