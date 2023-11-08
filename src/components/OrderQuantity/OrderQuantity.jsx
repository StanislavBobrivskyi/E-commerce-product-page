import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export function OrderQuantity() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count === 0) {
      toast.error('Значення не може бути менше нуля!', {
        position: 'top-center',
        autoClose: 2000, // Автоматично закрити сповіщення через 2 секунди
      });
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <p>Лічильник: {count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <ToastContainer />
    </div>
  );
}
