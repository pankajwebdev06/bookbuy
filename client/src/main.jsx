import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import productReducer, { productsFetch } from "./features/productSlice.js";
import { productsApi } from "./features/productsApi.js";
import cartReducer, { getTotals } from "./features/cartSlice.js";
import { UserProvider } from "./context/userContext.jsx";

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApi.middleware);
  },
});

store.dispatch(productsFetch());
store.dispatch(getTotals());

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <UserProvider>
      <App />
    </UserProvider>
  </Provider>
);
