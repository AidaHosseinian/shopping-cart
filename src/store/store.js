import React, { createContext, useContext, useReducer } from 'react';

const store = createContext();
store.displayName = 'Store';

export const useStore = () => useContext(store);

export function StoreProvider ({ children, initialState, reducer }) { 
    const [ globalState, dispatch ] = useReducer(reducer, initialState);
    
    return (
      <store.Provider value={[globalState, dispatch]}>{children}</store.Provider>
    );
};