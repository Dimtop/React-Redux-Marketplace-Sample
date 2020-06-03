import mainReducer from '../Reducers/mainReducer';
import { createStore } from 'redux';


const store = createStore(mainReducer);

export default store;