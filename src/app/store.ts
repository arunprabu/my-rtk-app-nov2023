import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import usersReducer from "../features/users/usersSlice"
import productsReducer from "../features/products/productsSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
    products: productsReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

/* Store is a big object for the entire app 
  store = {
    counter: counterReducer,    // { }
    users: userReducer, // { }
    products: producerReducer, // []
    auth: authReducer // {}
  }
*/
