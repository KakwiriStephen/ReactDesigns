
import { configureStore, createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState={counter: 0},
  reducers:{
    increment (state,action){
      state.counter + 1
    },
    decrement(state,action){
      state.counter - 1
    },
    addBy(){
      state.action + 10
    }
  }
})

export const actions = counterSlice.actions

const store = configureStore({
  reducer: counterSlice.reducer
})

