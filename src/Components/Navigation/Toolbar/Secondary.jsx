import React from 'react'
import {FaReact} from 'react-icons/fa'
import {HiSearch} from 'react-icons/hi'
import {IoLanguage} from 'react-icons/io5'
import {BsBoxArrowUpRight} from 'react-icons/bs';
import {Link} from 'react-router-dom';
function Secondary() {
  return (
    <div className='flex justify-between text-white bg-black px-5 py-3 items-center'>
        <div className='flex items-center gap-2 text-blue-300 text-2xl'>
            <div><FaReact/></div>
            <div className="font-bold ">React</div>
        </div>
        <div className='flex gap-3'>
           <div className=' hover:bg-blue-200 px-3 py-2'>Docs</div>
           
           <div className=' hover:bg-blue-200 px-3 py-2'>Tutorial</div>
           <Link to='/About'>
           <div className=' hover:bg-blue-200 px-3 py-2'>Blog</div>
           </Link>
           <div className=' hover:bg-blue-200 px-3 py-2'>Community</div>
        </div>
        <div className='flex bg-[#333] items-center gap-1 px-1'>
            <div><HiSearch/></div>
            <input type="text" name="nisha" id="nisha" className='focus:outline-none bg-[#333] py-2 px-5 text-white' placeholder='Search'/>
        </div>
        <div className='flex gap-2 items-center'>
            <div className='hover:bg-slate-400 rounded'>v</div>|
              <div className='hover:bg-slate-400 cursor-pointer flex gap-2 items-center'>
                <div><IoLanguage/></div>
                 <div>Language</div>
              </div>|
            <div className='hover:bg-slate-400 cursor-pointer'>Github</div>
            <div><BsBoxArrowUpRight/></div>
        </div>
      
    </div>
  )
}

export default Secondary
