

import React, { useCallback, useEffect, useState } from 'react'

function MovieApi2() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [list, setList] = useState("Trending");
  const [loading, setLoading] = useState(false);

  let sorted = data.filter((item)=>{
    let sortedSearch = search.toLowerCase();
    if(sortedSearch==="") return true;
    return item.Title.toLowerCase().includes(sortedSearch);
  })

  async function fetch1(a){
    setLoading(true);
    const apikey = 'dd4ad9fd'
    let api = await fetch(`https://www.omdbapi.com/?apikey=${apikey}&s=${list}`);
    let api2 = await api.json();
    setData(api2.search||[]); 
    setLoading(false);

  }
  function debounce( callback, delay ){
    let t ;
    return function(...args){
        clearTimeout(t);
       t = setTimeout(()=>{
         callback(...args);
       }, delay)
    } 
  }
  function handel(e){
    setSearch(e.target.value)
    if(e.target.value.trim()==="") setList("Trending");
    else setList(e.target.value);
  } 
  const debounceApply = useCallback(debounce((val)=>{console.log("Searching for : ", val);
    fetch1(val);
  }, 800), []);

  useEffect(()=>{
    debounceApply(list);
  },[list])

    return (
    <div>
           <input 
           value = {search} 
           onChange={handel}
           className='border-amber-100'
           placeholder='seach here'
           ></input>
           {loading? console.log("Searching"): sorted.length>0? console.log(sorted): console.log("No result found")}
    </div>
  )
}

export default MovieApi2