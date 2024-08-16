import React, { useContext } from "react";
import Button from "../components/Button";
import Modal from "react-modal";
import { CartContext } from "../contexts/CartFunctionality";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    // TODO Add Checkout
    setModalIsOpen(false);
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
            <p>${item.price}</p>
            <div>
              <Button
                onClick={() =>
                  updateQuantity(item.id, Math.max(1, item.quantity - 1))
                }
              >
                -
              </Button>
              <span>{item.quantity}</span>
              <Button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </Button>
            </div>
            <Button onClick={() => removeFromCart(item.id)}>Remove</Button>
          </div>
        ))
      )}
      <div className="cart-summary">
        <p>Subtotal: ${total}</p>
        <p>Shipping: $10</p>
        <p>Total: ${total + 10}</p>
        <Button onClick={() => setModalIsOpen(true)}>Checkout</Button>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h2>Confirm Checkout</h2>
        <Button onClick={handleCheckout}>Confirm</Button>
        <Button onClick={() => setModalIsOpen(false)}>Cancel</Button>
      </Modal>
    </div>
  );
};

export default CartPage;
