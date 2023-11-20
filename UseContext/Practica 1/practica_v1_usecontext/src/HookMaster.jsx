import React from 'react';
import { StateCompo } from './Context/StateCompo';
import { Contador } from './Components/Contador';
import { useContext } from 'react';



export const HookMaster = () => {
  return (
    
      <StateCompo>
      <h1>HookMaster</h1>
      <Contador></Contador>
      </StateCompo>
    
  );
};
