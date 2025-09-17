import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';

function MovieApi() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [list, setList] = useState("Avengers")

  const sorted = data.filter((item)=>{
    const searchSort = search.toLowerCase();
    if(searchSort===""){
         return true;
    }
   
    return item.Title.toLowerCase().includes(searchSort);
  })
  async function fetch1() {
   
        const API_KEY =  "dd4ad9fd";  
    const api = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${list}`);
    const data1 = await api.json();
    setData(data1.Search||[]);
}
function handel(e){
  setSearch(e.target.value);
  if(e.target.value.trim()==="")
    setList("Avengers")
else
    setList(e.target.value);
}
useEffect(()=>{
    fetch1();
},[list])
    return (
    <div className='flex flex-col justify-center items-center w-full mt-10'>
        <input type="text" placeholder='search your movie'
         value={search} className='text-black bg-gray-300 w-72 h-14 rounded-4xl p-6 border-black border-[3px]'
         onChange={handel}/>
         {console.log(sorted)}
         {sorted.length>0?(<MovieCard sorted={sorted}></MovieCard>): (<p className='text-white font-semibold mt-5 text-3xl'>No result found</p>)}
    </div>
  )
}

export default MovieApi