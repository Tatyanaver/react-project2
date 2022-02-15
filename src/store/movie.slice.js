import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {moviesService} from "../services/movies.service";



export const getAllMovies = createAsyncThunk(
    'movieSlice/getAllMovies',
    async (_, {rejectWithValue})=> {
        try {
            const movies = await moviesService.getAllMovies();
            return movies
        }
        catch (e) {
            return rejectWithValue(e.message)
        }

    }
)
const movieSlice = createSlice({
    name:'movieSlice',
    initialState:{
        movies:[],
        status:null,
        error:null,
    },
    extraReducers: {
        [getAllMovies.pending]: (state,action) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllMovies.fulfilled]: (state,action) => {
            state.status = 'fulfilled'
            state.movies = action.payload
        },
        [getAllMovies.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload}
    }
})

const movieReducer = movieSlice.reducer
export default movieReducer