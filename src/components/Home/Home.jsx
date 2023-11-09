import { OrderBtn } from 'components/OrderBtn/OrderBtn';
import { OrderQuantity } from 'components/OrderQuantity/OrderQuantity';
import React from 'react';

export function HomePage() {
  return (
    <div>
      <h2>Ласкаво просимо на головну сторінку!</h2>

      {/* Розділ з описом */}
      <section>
        <h3>Опис</h3>
        <p>Тут буде опис вашого веб-сайту або продукту.</p>
      </section>

      {/* Інтерактивна секція (завтра буде) */}
      <section>
        <h3>Інтерактивна секція</h3>
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
