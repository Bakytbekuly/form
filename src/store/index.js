import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slice/counter";
import { loginReducer } from "./slice/login";
import { shopReducer } from "./slice/shop";

const store = configureStore({
    reducer: { counter: counterReducer, shop: shopReducer, login: loginReducer }
});

store.subscribe(() => {
    console.log("subscribe", store.getState());
    localStorage.setItem("basket", JSON.stringify(store.getState().shop.basket));
});

export default store;
