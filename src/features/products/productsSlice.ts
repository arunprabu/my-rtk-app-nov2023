import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export interface Product {
  id?: number
  title: string
  category: string
  description: string
  image: string
}

interface ProductsState {
  isLoading: boolean
  isError: boolean
  productList: Product[]
  cartItems: Product[]
  status: string
}

const initialState: ProductsState = {
  isLoading: false,
  isError: false,
  productList: [],
  cartItems: [],
  status: "idle",
}

// Let's fetch the products from rest api
export const fetchProductsAsync = createAsyncThunk<Product[]>(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products")
    return response.data
  },
)

export const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    // if you want to update the store locally w/o connecting to the backend rest api
    // write the logic here
    addToCart: (state, action: PayloadAction<Product>) => {
      console.log(state)
      console.log(action)
      state.cartItems = [...state.cartItems, action.payload]
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        state.isLoading = false
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.isLoading = false
        state.productList = action.payload
      })
      .addCase(fetchProductsAsync.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.status = "Unable to fetch products. Try later"
      })
  },
})

export const { addToCart } = productsSlice.actions
export default productsSlice.reducer
