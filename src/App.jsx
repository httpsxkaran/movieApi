import React from 'react'
import MovieApi from './componenets/MovieApi'
import NewsApi from './componenets/NewsApi'

function App() {
  return (
    <div className='flex flex-col items-center min-h-screen bg-cover bg-center ' 
    style={{backgroundImage:`url("https://cdn.pixabay.com/photo/2019/10/31/08/26/film-4591329_1280.jpg")`,
      backgroundSize: 'cover',
      backgroundPosition: 'fixed',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat'
    }}>
      <h1 className='font-medium text-6xl text-white mb-8 mt-8'>🎥 CineHub</h1>
      <MovieApi></MovieApi>
    </div>
    // <div>
    //   <NewsApi></NewsApi>
    // </div>
  )
}

export default App