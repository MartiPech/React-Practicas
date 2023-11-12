import {TYPES} from "./CounterAction" 
export const initialState ={counter:0}

export function CounterReducer (state,action){
          switch (action.type) {
              case TYPES.INCREMENT:
                  return {counter : state.counter + 1 }
              case TYPES.INCREMENT_5:
                  return {counter : state.counter + action.payload } 
              case TYPES.DECREMENT:
                  return {counter : state.counter - 1 } 
              case TYPES.DECREMENT_5:
                  return {counter : state.counter - action.payload } 
              case TYPES.RESET:
                    return {counter : 0 }           
              default:
                  return state
              
          }
      }
  

