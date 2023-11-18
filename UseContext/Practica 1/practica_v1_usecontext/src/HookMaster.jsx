import React from 'react';
import { Counter_Privider } from './Context/Counter_Privider';
import { Counter } from './Components/Counter';

export const HookMaster = () => {
  return (
    <>
      <Counter_Privider>
      <h1>HookMaster</h1>
        <Counter />
      </Counter_Privider>
    </>
  );
};
