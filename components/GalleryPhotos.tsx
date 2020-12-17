import Gallery from "react-photo-gallery";
import { useCallback, useState } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";

import { largeDevice } from "../utils/devices";

interface IPhoto {
  src: any;
  width: number;
  height: number;
  title: string;
}

interface IGalleryPhotos {
  photos: IPhoto[];
}

const navButtonStyles = (base: any) => ({
  ...base,
  backgroundColor: "#222",
  boxShadow: "0 1px 6px rgba(0, 0, 0, 0.18)",

  "&:hover, &:active": {
    backgroundColor: "#222",
    opacity: 1,
  },
  "&:active": {
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.14)",
    transform: "scale(0.96)",
  },
});

const GalleryPhotos: React.FC<IGalleryPhotos> = ({ photos }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((_, { photo, index }) => {
    console.log(photo);
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  }, []);

  return (
    <div>
      <Gallery photos={photos} onClick={openLightbox} margin={6} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              styles={{
                view: (base) => ({
                  ...base,
                  alignItems: "center",
                  display: "flex ",
                  height: "calc(100vh - 54px)",
                  justifyContent: "center",

                  [largeDevice]: {
                    padding: 20,
                  },

                  "& > img": {
                    maxHeight: "calc(100vh - 94px)",
                  },
                }),
                navigationPrev: navButtonStyles,
                navigationNext: navButtonStyles,
              }}
              views={photos.map((photo) => ({
                caption: photo.title,
                alt: photo.title,
                source: {
                  fullscreen: photo.src,
                  regular: photo.src,
                },
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};

export default GalleryPhotos;
