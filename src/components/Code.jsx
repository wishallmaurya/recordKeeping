import React from "react";
import { useState } from 'react'

const Code = ({rohit}) => {
  let [num,setNum ]= useState(1)

  const inc=()=>{
  setNum(num+1)
  }
  const dec=()=>{
    setNum(num-1)
  }

  return (
    <div>
      <h1> {num}</h1>
      <button onClick={inc}>Inc</button>
      <button onClick={dec}>Dec</button>
      <h1>{rohit}</h1>
    </div>
  );
};

export default Code;
