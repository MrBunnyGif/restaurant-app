import { createSlice } from '@reduxjs/toolkit'
import { Product, sliceType } from './types/Redux'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: sliceType = {
  productsList: [],
}

export const productSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    createProductsList: (state, action: PayloadAction<Product[]>) => {
      state.productsList = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { createProductsList } = productSlice.actions

export default productSlice.reducer

