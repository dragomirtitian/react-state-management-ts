import users from './users';
import jokes from './jokes';
import { createSystemStorage } from 'simpply';


export type GlobalStorage = typeof import('.')['default']
export type State = GlobalStorage['initialState']
export default createSystemStorage({
  users,
  jokes
});
