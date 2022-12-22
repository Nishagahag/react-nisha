import React from 'react'
import {FaHandPointRight} from 'react-icons/fa'

function Header() {
  return (
    <div className="flex justify-center items-center gap-4 w-screen bg-blue-200 px-3 py-2 font-bold">
       <div>Try out the new preview of React Docs!</div>
       <div className=''><FaHandPointRight/></div>
       <div className='text-blue-400'>beta.reactjs.org</div>
    </div>
  );
}

export default Header
