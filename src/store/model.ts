import { Action, action, Thunk, thunk } from 'easy-peasy';
import { Injections } from './injections';
import { IValues } from '../types';
export interface Model {
  values: IValues;
  set: Action<Model, any>;
  reset: Action<Model, void>;
  fetchData: Thunk<Model, string, Injections>;
}

const initialValues = {
  name: '',
  gitURL: '',
  imageURL: '',
  portfolioURL: '',
  role: '',
};
const model: Model = {
  values: initialValues,
  set: action((state, payload) => {
    state.values = payload;
  }),
  reset: action(state => {
    state.values = initialValues;
  }),
  fetchData: thunk(async (actions, payload, { injections }) => {
    try {
      const { getData } = injections;
      const data = await getData(payload);
      actions.set(data);
    } catch (error) {
      actions.reset();
    }
  }),
};

export default model;
