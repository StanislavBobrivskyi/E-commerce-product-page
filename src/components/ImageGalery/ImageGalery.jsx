import React, { useState } from 'react';
import Lightbox from 'react-lightbox-component';

const ImageGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = [
    // '/public/ecommerce-product-page-main/images/image-product-2-thumbnail.jpg',
    // '/public/ecommerce-product-page-main/images/image-product-1.jpg',
    // '/public/ecommerce-product-page-main/images/image-product-2.jpg',

    [
      {
        src: 'https://github.com/StanislavBobrivskyi/E-commerce-product-page/blob/main/public/ecommerce-product-page-main/images/image-product-1.jpg',
        title: 'image title',
        description: 'image description',
      },
    ],
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
