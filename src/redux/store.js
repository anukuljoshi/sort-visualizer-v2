import { configureStore } from '@reduxjs/toolkit';

import arrayReducer from './slices/arraySlice';
import sortReducer from './slices/sortAlgoSlice';

export default configureStore({
    reducer: {
        array: arrayReducer,
        sortalgo: sortReducer
    }
});