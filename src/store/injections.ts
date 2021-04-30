import { getData } from '../services';

export interface Injections {
  getData: typeof getData;
}
