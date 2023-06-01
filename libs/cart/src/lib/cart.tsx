import styles from './cart.module.scss';

/* eslint-disable-next-line */
export interface CartProps {}

export function Cart(props: CartProps) {
  return (
    <h1 style={{ width: '100%' }}>Welcome to Cart! this is lib component</h1>
  );
}

export default Cart;
