import { configureStore } from "@reduxjs/toolkit";
import products from "./jewelrySlice";
import cart from "./cartSlice";
import favorite from "./favoriteSlice"

export const store = configureStore ({
    reducer: {
        products,
        cart,
        favorite,
    }
})