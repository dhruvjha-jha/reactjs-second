import React from 'react'
function Header() {
  return (
    <header className='w-full h-20 bg-sky-300 flex items-center justify-around'>
      <h1 className='text-white text-[30px] hover:text-gray-400' >React App</h1>
      <div className="w-[42%] flex justify-around  ml-6">
        <a href='#' className='text-white text-[20px] hover:text-gray-400'>Home</a>
        <a href='#' className='text-white text-[20px] hover:text-gray-400'>About</a>
        <a href='#' className='text-white text-[20px] hover:text-gray-400'>Contact</a>
        <a href='#' className='text-white text-[20px] hover:text-gray-400'>Services</a>
      </div>
<input type="text" placeholder='Search' className='rounded-md pl-4 w-48 h-8' />
    </header>
    )
}
export default Header
