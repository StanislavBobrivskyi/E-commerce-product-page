import { OrderBtn } from 'components/OrderBtn/OrderBtn';
import { OrderQuantity } from 'components/OrderQuantity/OrderQuantity';
import React from 'react';

export function HomePage() {
  return (
    <div>
      <h2>Ласкаво просимо на головну сторінку!</h2>

      {/* Розділ з описом */}
      <section>
        <p>Sneaker Company</p>
        <h3>Fall Limited Edition Sneakers</h3>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
      </section>

      {/* Інтерактивна секція (завтра буде) */}
      <section>
        <h3>$125.00</h3>
        <span>50%</span>
        <span>$250.00</span>
        <OrderQuantity />
      </section>

      {/* Галерея з картинками (завтра буде) */}
      <section>
        <h3>Галерея</h3>
        {/* Галерея з картинками тут */}
      </section>
      <OrderBtn />
    </div>
  );
}
