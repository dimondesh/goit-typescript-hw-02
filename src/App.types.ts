export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}

export interface ErrorMessageProps {
  message: string;
}

export interface ImageCardProps {
  image: Image;
  onImageClick: (image: Image) => void;
}

export interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

export interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  image: Image;
}

export interface LoadMoreBtnProps {
  onClick: () => void;
}

export interface SearchBarProps {
  onSubmit: (query: string) => void;
}
