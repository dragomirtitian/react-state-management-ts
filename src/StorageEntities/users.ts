import { createLocalStorage } from "./helpers";

const initialState = new Array(3).fill(0).map((_, index) => ({
  name: `User ${index + 1}`
}));

export type User = { name : string }

export default createLocalStorage({
  initialState,
  effects: {
    ADD_USER: (s, u: User) => [...s, u ]
  }
});

