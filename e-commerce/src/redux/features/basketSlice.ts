import { createSlice } from "@reduxjs/toolkit";
import { initialArticle } from "../../interfaces/Article";


const initialState: initialArticle = {
  items: []
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,

  reducers: {
    addItemToBasket: (store, action) => {
      console.log('Article dans le panier !')
      store.items = [...store.items, action.payload]
    },
    removeItemFromBasket: (store, action) => {
      store.items = store.items.filter(item => item.name !== action.payload.name)
    },
  }
});

export const { addItemToBasket, removeItemFromBasket } = basketSlice.actions;

export const selectItems = (store) => store.basket.items;

export default basketSlice.reducer;