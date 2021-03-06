import { configureStore } from "@reduxjs/toolkit";

import modalReducer from "../reducers/Modal.js";
import moviesReducer from '../reducers/Movies.js';

export default configureStore({
    reducer: {
        modal: modalReducer,
        movies: moviesReducer,
    }
})
