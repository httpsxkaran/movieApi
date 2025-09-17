import React, { useEffect, useState } from 'react'

function FakeApi() {
    const [val, setVal] = useState([]);
    const [data, setData] = useState("");
    const [sorted, setSorted] = useState([]);
  async function Fetch() {
    const api = await fetch("https://dummyjson.com/products");
    const data = await api.json();
    setVal(data.products);
   
  }
  useEffect(()=>{
    Fetch();
  },[])

  function handel(){
    let sort = val.filter((item)=>item.brand.toLowerCase().includes(data.toLowerCase()))
     setSorted(sort);
    //  console.log(sorted);
  }
    return (
    <div>
      <input type="text" placeholder='Search here' value={data} onChange={(event)=>setData(event.target.value)}/>
      <button className='px-2 py-2 bg-red-900' onClick={()=>handel()}> Search </button>
      {console.log(data)}
      {console.log(val)}
      {console.log(sorted, "Stored data")}
    </div>
  )
}

export default FakeApi