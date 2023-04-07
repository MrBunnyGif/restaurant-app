import { createSlice } from '@reduxjs/toolkit'
import { Product, sliceType, Bascket } from './types/Redux'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: sliceType = {
  productsList: [],
  currentBascket: undefined
}

export const globalActions = createSlice({
  name: 'actions',
  initialState,
  reducers: {
    createProductsList: (state, action: PayloadAction<Product[]>) => {
      state.productsList = action.payload
    },
    createCurrentBascket: (state, action: PayloadAction<Bascket>) => {
      state.currentBascket = action.payload
    },
    addProductsToBascket: (state, action: PayloadAction<Product[]>) => {
      action.payload.forEach(product => state.currentBascket?.products.push(product))
    }
  },
})

// Action creators are generated for each case reducer function
export const { createProductsList } = globalActions.actions

export default globalActions.reducer

