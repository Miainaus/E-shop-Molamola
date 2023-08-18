import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
const stripe = require('stripe')('sk_test_51NfZAJKF10E90bw5Fa8CFPAjo8jxA3eRuCAn86N0oCseJYeCPdC9we34jdrZW9D3saFf4j0jJH8SfFj6TvqaYabZ00EqWKjKw8');



export const store = configureStore({
  reducer: {
    cart:cartReducer,
  },
})