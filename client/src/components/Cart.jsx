import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import StartShopping from "./StartShopping";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../features/cartSlice";
import { toast } from "react-toastify";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
    toast.error(`${cartItem.name} Removed from cart`);
  };
  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
    toast.info(`${cartItem.name} removed`);
  };
  const handleIncreaseQuantity = (cartItem) => {
    dispatch(addToCart(cartItem));
    toast.info(`${cartItem.name} Increased`);
  };
  const handleClearCart = () => {
    dispatch(clearCart());
    toast.error("All items Removed");
  };

  return (
    <div className="mt-4 mx-auto">
      <div>
        <h2 className="w-full flex justify-center text-[2rem] font-medium">
          Shopping Cart
        </h2>
        {cart.cartItems.length === 0 ? (
          <StartShopping />
        ) : (
          <div className="mt-4 py-4">
            {/* <div className="grid grid-col-6 gap-4 items-center justify-between mb-4">
              <div className="col-span-3 font-medium text-lg">Product</div>
              <h3 className="col-span-1 font-medium text-lg">Price</h3>
              <h3 className="col-span-1 font-medium text-lg">Quantity</h3>
              <h3 className="col-span-1 font-medium text-lg">Total</h3>
            </div> */}
            <div className="border-t-2 border-black py-4 px-2">
              {cart.cartItems?.map((cartItem) => (
                <div className="mb-4" key={cartItem.id}>
                  <div className="grid grid-cols-6 gap-2">
                    <div className="col-span-3">
                      <div className="flex">
                        <img
                          className="w-24 h-32 rounded-lg"
                          src={cartItem.imageUrl}
                          alt={cartItem.name}
                        />
                        <div className="ml-2 flex flex-col justify-between">
                          <div className="">
                            <h3 className="font-medium text-lg">
                              {cartItem.name}
                            </h3>
                            <p className="text-sm">{cartItem.author}</p>
                          </div>
                          <div className="bg-red-500 py-1 px-2 rounded-lg mt-1 flex justify-center">
                            <button
                              className="text-white w-full"
                              onClick={() => handleRemoveFromCart(cartItem)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="font-medium col-span-1 flex justify-center items-center">
                      ₹{cartItem.price}
                    </div>
                    <div className="flex span-col-1 items-center justify-center">
                      <button
                        className="text-4xl"
                        onClick={() => handleDecreaseCart(cartItem)}
                      >
                        -
                      </button>
                      <div className="mx-2 border px-4 py-1 rounded-lg">
                        {cartItem.cartQuantity}
                      </div>
                      <button
                        className="text-3xl"
                        onClick={() => handleIncreaseQuantity(cartItem)}
                      >
                        +
                      </button>
                    </div>
                    <div className="span-col-1 flex items-center justify-end">
                      ₹{cartItem.price * cartItem.cartQuantity}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t-2 border-black pt-4 flex justify-between items-start">
              <button
                className="py-2 px-6 rounded-lg text-black border border-gray-400 hover:bg-gray-400 hover:border-black"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
              <div>
                <div className="flex justify-between">
                  <h3 className="text-xl font-medium">Subtotal</h3>
                  <h3 className="font-bold text-lg">₹{cart.cartTotalAmount}</h3>
                </div>
                <p className="flex justify-center text-sm text-gray-500">
                  Taxes and shipping calculated at checkout
                </p>
                <div className="bg-blue-500 p-2 rounded-lg my-2 flex items-center justify-center hover:bg-blue-700">
                  <button className="text-white w-full font-medium text-lg">
                    CheckOut
                  </button>
                </div>
                <div className="flex items-center justify-center bg-gray-100 py-2">
                  <Link to="/" className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                      />
                    </svg>
                    <span className="ml-2 text-lg">Continue Shopping</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
