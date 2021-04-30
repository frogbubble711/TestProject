import { createStore } from 'easy-peasy';
import model from './model';
import { getData } from '../services';

const store = createStore(model, {
  injections: {
    getData,
  },
});

export default store;
