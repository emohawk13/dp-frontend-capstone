import React, { useContext } from "react";
import Button from "../Button";
import Modal from "react-modal";
import { CartContext } from "../../contexts/CartFunctionality";
import { ThemeContext } from "../../contexts/ThemeMode";

Modal.setAppElement("#root");

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } =
    useContext(CartContext);
  const { theme } = useContext(ThemeContext);

  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  let shippingCost = total * 0.1;
  let roundedShippingCost = Math.ceil(shippingCost * 100) / 100;

  const handleCheckout = () => {
    clearCart();
    setModalIsOpen(false);
  };

  return (
    <div className={`cart-page ${theme === "dark" ? "dark-mode" : ""}`}>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img
              src={item.image}
              alt={item.title}
              className="cart-item-image"
            />
            <div className="cart-item-details">
              <p>{item.title}</p>
              <p>${item.price.toFixed(2)}</p>
              <div className="quantity-control">
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
            </div>
            <Button
              onClick={() => removeFromCart(item.id)}
              className="remove-button"
            >
              Remove
            </Button>
          </div>
        ))
      )}
      <div className="cart-summary">
        <p>Subtotal: ${total.toFixed(2)}</p>
        <p>Shipping: ${roundedShippingCost.toFixed(2)}</p>
        <p>Total: ${(total + roundedShippingCost).toFixed(2)}</p>
        <Button onClick={() => setModalIsOpen(true)}>Checkout</Button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <h2>Confirm Checkout</h2>
        <h2>Your total is ${(total + roundedShippingCost).toFixed(2)}</h2>
        <Button onClick={handleCheckout}>Confirm</Button>
        <Button onClick={() => setModalIsOpen(false)}>Cancel</Button>
      </Modal>
    </div>
  );
};

export default CartPage;
