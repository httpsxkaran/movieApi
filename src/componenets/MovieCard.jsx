import React from 'react'

function MovieCard({sorted}) {
  return (
    <div  className=' flex flex-wrap gap-10 p-5 justify-center mt-5'>
        {sorted.map((item,idx)=>{
          return <div key={idx} className='w-full sm:w-64 md:w-72 lg:w-80 flex flex-col p-6 border-[1px] border-white cursor-pointer shadow-white/20 shadow-lg rounded-2xl hover:shadow-2xl hover:shadow-white/40 transition duration-500 transform hover:scale-105'
          style={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)', 
        }}
          >

                 <img className="h-52 w-full object-cover rounded-lg text-white font-semibold gap-2" src={item.Poster} alt={item.Title}></img>
                  <span className='text-white font-semibold mt-3'> {item.Title}</span> 
                  <span className='text-white font-semibold'>Released: {item.Year}</span> 
                  <span className='text-white font-semibold'>Type:{item.Type}</span>
                  <span className='text-white font-semibold'>IMDB:{item.imdbID}</span>
          </div> 
        })}
    </div>
  )
}

export default MovieCard