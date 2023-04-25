import { combineReducers } from 'redux';

import isAddingReducer from './isAddingReducer';
import filterStatusReducer from './filterStatusReducer';
import arrWordsReducer from './arrWordsReducer';

const reducer = combineReducers({
    arrWords: arrWordsReducer,
    filterStatus: filterStatusReducer,
    isAdding: isAddingReducer
});

export default reducer;