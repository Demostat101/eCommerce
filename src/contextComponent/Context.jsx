import { createContext, useContext, useEffect, useState } from "react";
import { useReducer } from "react";
import React from 'react'

export const contextProvider = createContext();

export const cartContext = () => {
    
    return useContext(contextProvider)
}



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
            
            case "INCREASE":

                const temporaryState1 = state.map((val) =>{

                if (val.id === action.payload.id) {
                    return {...val, quantity: val.quantity + 1}
                } else {
                    return val;
                } 

                });
                
                return temporaryState1;

            case "DECREASE":

                const temporaryState2 = state.map((val) =>{
                    
                    if (val.id === action.payload.id) {
                        
                        return {...val, quantity: val.quantity - 1}
                        
                    } else {
                        return val;
                    } 
                    
                });
                
                return temporaryState2;

                case "REMOVE": 

                    const temporaryState3 = state.filter((val)=>  val.id !== action.payload.id)

                    return temporaryState3;
                
                default:
                    return state;
                }
            };
            
            const getLocalCartData = ()=>{
                let newCartData = localStorage.getItem("state");
                if (newCartData === "[]") {
                    return [];
                } else {
                    return JSON.parse(newCartData);
        }
    }
    
    
    const [state, dispatch] =useReducer(reducer, [],getLocalCartData)
    
    
    
    useEffect(()=>{
        localStorage.setItem("state", JSON.stringify(state));
        
        
    },[state])
    
   

 
  return (
        <contextProvider.Provider value={{state, dispatch}}>
            {children}
        </contextProvider.Provider>
  )
}

export default Context
