import { createLocalStorage } from "./helpers";


export type Joke = {
  joke: string
}
export default createLocalStorage({
  initialState: [] as Joke[],
  effects: {
    SET_JOKES: (_, payload: Joke[]) => payload
  }
});
