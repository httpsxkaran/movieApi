import React from 'react'
import MovieApi from './componenets/MovieApi'
import NewsApi from './componenets/NewsApi'
import MovieApi2 from './componenets/MovieApi2'

function App() {
  return (
    // <div className='flex flex-col items-center min-h-screen bg-cover bg-center ' 
    // style={{backgroundImage:`url("https://assets.nflxext.com/ffe/siteui/vlv3/c95abc7a-8124-4630-bb7a-3b160bdc6de3/web/IN-en-20250915-TRIFECTA-perspective_d3d87aa7-58ed-4c6b-98dc-231ed05ba675_large.jpg")`,
    //   backgroundSize: 'cover',
    //   backgroundPosition: 'fixed',
    //   backgroundAttachment: 'fixed',
    //   backgroundRepeat: 'no-repeat'
    // }}>
    //   <h1 className='font-medium text-6xl text-amber-100 mb-8 mt-8'>🎥 CineHub</h1>
    //   <MovieApi></MovieApi>
    // </div>
    <div>
      <MovieApi2></MovieApi2>
    </div>
    // <div>
    //   <NewsApi></NewsApi>
    // </div>
  )
}

export default App