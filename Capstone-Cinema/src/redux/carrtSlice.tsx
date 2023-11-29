import { createSlice } from "@reduxjs/toolkit";
import { TDetail } from "../pages/detail/convert";

type State = {
    cart: TDetail[];
};

const initialState: State = {
    cart: [],
};

const cartSlice = createSlice({
    initialState,
    name: "cartSlice",
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload);

            // Immer:
            // return [...state];

            // Không dùng return;
            // Nếu dùng: phải tự clone
        },
        removeItem: (state, action) => {
            console.log(action)
            return state;
        },
    },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, removeItem } = cartSlice.actions;
