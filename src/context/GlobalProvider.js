import React, { useReducer } from 'react';
import { initialStore, GlobalContext } from './GlobalState';
import AppReducer from './AppReducer';

const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialStore);

    const removeTransaction = id => {
        dispatch({
            type: 'REMOVE_TRANSACTION',
            payload: id
        })
    }

    const addTransaction = transaction => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }
    
    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            removeTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;
