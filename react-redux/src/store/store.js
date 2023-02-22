
import { configStore, createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name:'counter',
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

