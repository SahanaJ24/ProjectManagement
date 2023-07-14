import { createStore } from 'redux';
import rootReducer from '../Components/reducer';

const store = createStore(rootReducer);

export default store;