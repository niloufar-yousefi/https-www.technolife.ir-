import { create } from 'zustand'

const useStore = create((set) => ({
  basket: [],
  addToBasket: (product) => set((state) => {
    const existingProduct = state.basket.some(item => item.id === product.id);
    if (existingProduct) {
      alert('این محصول قبلا به سبد شما اضافه شده است')
      return state;
    } else {
      return { basket: [...state.basket, product] };
    }
  }),
  removeFromBasket: (productId) => set((state) => {
    const updatedBasket = state.basket.filter(item => item.id !== productId);
    return { basket: updatedBasket };
  }),

  increaseQuantity: (productId) => set((state) => {
   const index = state.basket.findIndex(item => item.id === productId)
   if(index !== -1){
    state.basket[index].quantity += 1
    return {basket:[...state.basket]}
   }
  }),
  
    decreaseQuantity: (productId) => set((state) => {
      const index = state.basket.findIndex(item => item.id === productId)
      if(index !== -1){
       if(state.basket[index].quantity > 1){
        state.basket[index].quantity -= 1
        return {basket:[...state.basket]}
       }else{
        return {basket:[...state.basket]}
       }
      }  
   }),

}));

export default useStore;