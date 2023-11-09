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
      toast.error('you must choose at least one', {
        position: 'top-center',
        autoClose: 1000, // Автоматично закрити сповіщення через 1 секунди
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
