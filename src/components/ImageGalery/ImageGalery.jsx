import React, { useState } from 'react';
import Lightbox from 'react-lightbox-component';

const ImageGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = [
    {
      src: '../images/image-product-1-thumbnail.jpg',
      title: 'Image Title 1',
      description: 'Image Description 1',
    },
    {
      src: '../images/image-product-2-thumbnail.jpg',
      title: 'Image Title 2',
      description: 'Image Description 2',
    },
    {
      src: '../images/image-product-3-thumbnail.jpg',
      title: 'Image Title 3',
      description: 'Image Description 3',
    },
    {
      src: '../images/image-product-4-thumbnail.jpg',
      title: 'Image Title 4',
      description: 'Image Description 4',
    },
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
