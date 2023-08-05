import "redux-thunk/extend-redux";
/* 
type AppDispatch = typeof store.dispatch does not work with vanilla createStore + applyMiddlware
необходим дополнительный импорт, иначе TS ругается на вывоз ThunkAction<...>

прописать в tsconfig.json => "include": [ "...", "redux-thunk.d.ts"],
*/
