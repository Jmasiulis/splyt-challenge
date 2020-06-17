import { createStore } from 'redux';
import createRootReducer from './redux';

export default function configureStore() {
  const store = createStore(createRootReducer());

  return store;
}
