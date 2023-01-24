import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import productSlice from './productSlice';
import userSlice from './userSlice';
const store = configureStore({
    reducer: {
        product:productSlice,
        user:userSlice,
        cart:cartSlice
    },
});

export default store;