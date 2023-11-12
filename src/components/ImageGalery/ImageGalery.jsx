import React, { useState } from 'react';
import Lightbox from 'react-lightbox-component';

const ImageGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    // ...additional images
  ];

  return (
    <div>
      <Lightbox
        images={images}
        isOpen={isOpen}
        onClickPrev={() =>
          setPhotoIndex((photoIndex + images.length - 1) % images.length)
        }
        onClickNext={() => setPhotoIndex((photoIndex + 1) % images.length)}
        onClose={() => setIsOpen(false)}
        index={photoIndex}
      />
      <button onClick={() => setIsOpen(true)}>Open Lightbox</button>
    </div>
  );
};

export default ImageGallery;
