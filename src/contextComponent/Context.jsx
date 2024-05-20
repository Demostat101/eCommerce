import { createContext, useContext, useState } from "react";
import { useReducer } from "react";



export const contextProvider = createContext();

export const cartContext = () => {
    return useContext(contextProvider)
}




import React from 'react'

const Context = ({children}) => {

    const reducer = (state, action) => {

        switch (action.type) {
            case "ADD":

            const temporaryState = state.filter((val) => action.payload.id === val.id)

            if (temporaryState.length > 0) {
                return state
            } else {
                return [...state, action.payload]
            }

                
                
                break;
        
            default:
                return state;
                break;
        }
    };

    const [state, dispatch] =useReducer(reducer, [])

    // const info = {state,dispatch}

 
  return (
        <contextProvider.Provider value={{state, dispatch}}>
            {children}
        </contextProvider.Provider>
  )
}

export default Context
