import React from 'react'

const LoadingScreen = () => {
  return (
    <div className='bg-black w-screen h-full flex flex-col justify-center items-center'>
        <img src="https://pa1.aminoapps.com/5770/b3945fde8bae8ce84c751d9cee7d6ad5f07c29ac_00.gif"></img>
        <h1 className='lg:text-2xl text-xl  text-white/80 italic font-semibold'>Wait! we'r loading 1000+ pokemons</h1>
      
    </div>
  )
}

export default LoadingScreen
