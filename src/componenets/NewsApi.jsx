import React, { useEffect, useState } from 'react'

function NewsApi() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [default1, setDefault1] =  useState("trending");
  
    const fetchSearch = data.filter((itm)=>{
    const search2 = search.toLowerCase();
    if(search2==="") return true;
    return itm.description.toLowerCase().includes(search2);
   })


  async function fetchApi() {
    const api_key = 'd1379b85738c4b019ad25f970c286ed'; 
    const api = await fetch(`https://newsapi.org/v2/everything?q=${default1}&apiKey=${api_key}8&pageSize=12`);
    const api2 = await api.json();
    setData(api2.articles||[]); 
  }
  function handel(e){
    setSearch(e.target.value);
    if(e.target.value.trim()==="") setDefault1("Trending");
        else setDefault1(e.target.value);
  }
  useEffect(()=>{
    fetchApi();
  }, [default1]);
  return (
    <div>
        <input className='border=2px rounded-4xl p-5' 
        value={search} 
        onChange={handel} 
        placeholder='search news here'></input>
        {console.log(fetchSearch)}
        
    </div>
  )
}

export default NewsApi