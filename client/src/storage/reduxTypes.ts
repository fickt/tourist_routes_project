import store from "./store";

//типизируем стейт
export type RootState = ReturnType<typeof store.getState>;
//типизируем dispatch - функцию
export type AppDispatch = typeof store.dispatch;