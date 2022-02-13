import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {carService} from "../services";

const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async ()=>{
       const cars = await carService.getAll();
       return cars
    }
)
const carSlice = createSlice({
    name:'carSlice',
    initialState:{
        cars:[],
        status: null,
        error: null
    },
    reducers:{
        addCar:(state,action)=>{
            state.cars.push({
                id: new Date().getTime(),
                ...action.payload.data})
        },
        deleteCar:(state,action)=>{
            state.cars = state.cars.filter(car=>car.id!== action.payload.id)}
        },
    extraReducers: {
        [getAllCars.pending]: (state,action) => {},
        [getAllCars.fulfilled]: (state,action) => {},
        [getAllCars.rejected]: (state, action) => {}

    }
}
    )
const carReducer = carSlice.reducer
export const{addCar,deleteCar}= carSlice.actions

export default carReducer