import { combineReducers } from 'redux';
import employee from './employee.reducer';
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
    form: formReducer,
    employee: employee.reducer,
});

export default rootReducer;
