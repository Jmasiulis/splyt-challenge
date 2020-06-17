import { combineReducers } from 'redux';
import taxiMapReducer from '../reducers/TaxiMap';

const createRootReducer = () => combineReducers({
  taxiMapReducer,
});

export default createRootReducer;
