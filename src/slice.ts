import { createSlice } from '@reduxjs/toolkit'
import { sliceType } from './types/Redux'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: sliceType = {
  productsList: [],
}

export const productSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    createProductsList: (state, action: PayloadAction<any[]>) => {
      state.productsList = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { createProductsList } = productSlice.actions

export default productSlice.reducer

