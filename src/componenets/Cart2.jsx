import React from 'react'

function Cart2({ props }) {
  return (
    <div className='bg-gray-900 flex flex-wrap justify-center items-center  gap-10'>
        {props.map((item, index)=>{
            return (
                <div className={`h-auto w-44  bg-black  rounded-2xl shadow-lg m-4 mb-5 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:cursor-pointer hover: shadow-gray-500  flex flex-col items-center hover:-translate-y-2 `} key={index}>
                    <img className={`object-cover overflow-hidden h-48 rounded-2xl w-full object-top`} src={item.image} alt="" />
                    <h1 className='text-center text-lg font-semibold text-white'>{item.title}</h1>
                    <h1 className='text-center text-xs text-white'>{item.description}</h1>
                </div>
            )
        })}
    </div>
  )
}

export default Cart2