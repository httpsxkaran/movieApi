import React, { useCallback, useEffect, useState } from 'react'
import MovieCard from './MovieCard';



function MovieApi() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [list, setList] = useState("Avengers")
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(true);

  const sorted = data.filter((item)=>{
    const searchSort = search.toLowerCase();
    if(searchSort===""){
         return true;
    }
    return item.Title.toLowerCase().includes(searchSort);
  })
  async function fetch1(list) {
   setLoading(true);
        const API_KEY =  "dd4ad9fd";  
    const api = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${list}`);
    const data1 = await api.json();
    setData(data1.Search||[]);
    setLoading(false);
}

function handel(e){
  setSearch(e.target.value);
  if(e.target.value.trim()==="")
    setList("Avengers")
else
    setList(e.target.value);
}
 const debaounceApply = useCallback(debounce((value)=>{console.log("Searching for : ", value )  
  fetch1(value);}, 800),[]) 
useEffect(()=>{
    debaounceApply(list);
  // fetch1();
},[list])
function debounce(func, delay){
  let timer;
  return function(...a){
     clearTimeout(timer);
     timer = setTimeout(()=>{
      func( ...a);
      if(!sorted) setResult(false);
     }, delay)
  }
}
    return (
    <div className='flex flex-col justify-center items-center w-full mt-10'>
        <input type="text" placeholder='search your movie'
         value={search} className='text-black bg-gray-300 w-72 h-14 rounded-4xl p-6 border-black border-[3px]'
         onChange={handel}/>
         {console.log(sorted)}
         {loading?<h1 className='text-white font-semibold mt-5 text-3xl'>Searching for : {list}</h1>:data.length>0?(<MovieCard sorted={sorted} loading={loading}></MovieCard>):  (<p className='text-white font-semibold mt-5 text-3xl'>No result found</p>)}
    </div>
  )
}

export default MovieApi