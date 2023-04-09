import { combineReducers, createSlice } from '@reduxjs/toolkit'
import { Product, sliceType, ProductsToBeAdded, SectionInfo } from './types/Redux'
import type { PayloadAction } from '@reduxjs/toolkit'
import Storage from './Storage'
import { storageSectionKey } from './constants'
import { WritableDraft } from 'immer/dist/internal'

const initialState: sliceType = {
  productsList: [],
  currentBascket: undefined
}

const verifyBascketExistence = (info: string, state: WritableDraft<sliceType>) => {
  const sectionInfo: SectionInfo = JSON.parse(info)
  if (!state.currentBascket) {
    state.currentBascket = {
      id: `${sectionInfo.name}-${sectionInfo.tableNumber}-${new Date().getTime()}`,
      products: [],
      status: 'to-kitchen',
    }
  }
}

export const globalActions = createSlice({
  name: 'actions',
  initialState,
  reducers: {
    createProductsList: (state, action: PayloadAction<Product[]>) => {
      state.productsList = action.payload
    },
    addProductsToBascket: (state, action: PayloadAction<ProductsToBeAdded>) => {
      const info = Storage.getCookie(storageSectionKey)
      if (info === null)
        return

      verifyBascketExistence(info, state)

      for (let i = 0; i < action.payload.quantity; i++)
        state.currentBascket?.products.push(action.payload.product)
    }
  },
})

// Action creators are generated for each case reducer function
export const { createProductsList, addProductsToBascket } = globalActions.actions
const rootReducer = combineReducers({
  globalActions: globalActions.reducer
});

export default rootReducer

