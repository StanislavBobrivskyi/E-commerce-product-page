import React from 'react';

import image1 from '../images/image-product-1-thumbnail.jpg';
import image2 from '../images/image-product-2-thumbnail.jpg';
import image3 from '../images/image-product-3-thumbnail.jpg';
import image4 from '../images/image-product-4-thumbnail.jpg';

export function WomenSection() {
  return (
    <div>
      <ul>
        <li>
          <img src={image1} alt="Description 1" />
        </li>
        <li>
          <img src={image2} alt="Description 1" />
        </li>
        <li>
          <img src={image3} alt="Description 1" />
        </li>
        <li>
          <img src={image4} alt="Description 1" />
        </li>
      </ul>
    </div>
  );
}
