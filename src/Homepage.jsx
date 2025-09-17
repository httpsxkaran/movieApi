import React, { useEffect, useState } from 'react'
import Cart2 from './componenets/Cart2';

function Homepage() {
  const [val, setVal]= useState([]);
  async function fetchData() {
    let result = await fetch("https://fakestoreapiserver.reactbd.org/api/products/");
    let data = await result.json();
    // console.log(data);
    setVal(data.data);
    console.log(val)
  }
  useEffect(()=>{
    fetchData();
  },[])

    return (
    <div>
        <Cart2 props = {val}></Cart2>
    </div>
  )
}

export default Homepage