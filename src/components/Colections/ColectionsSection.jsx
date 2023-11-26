import { OrderButton } from 'components/OrderBtn/OrderBtn.styled';
import React from 'react';

export function ColectionSection() {
  return (
    <>
      <OrderButton />
      <h3>All colections</h3>
      <form action="#">
        <input type="text" placeholder="search colection" />
        <button type="button">SEARCH</button>
      </form>
    </>
  );
}
