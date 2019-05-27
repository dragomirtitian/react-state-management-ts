import { IStorageModule } from "simpply";

export function createLocalStorage<TState, T extends IStorageModule<TState, Record<string, (s: TState, p: any) => TState>>>(o: { initialState: TState } & T): IStorageModule<T['initialState'], T['effects']> {
    return o as any;
}
