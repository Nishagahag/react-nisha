import React from 'react'

function Layout() {
  return (
    <div>
      <div className='grid grid-cols-7'>
      <div className=' col-span-5 w-11/12 mx-auto flex-col '>
        <div className='flex h-66 w-full justify-between flex-col mt-8  gap-4  pb-10 border-b-4 border-gray-200'>
           <div className='text-5xl font-black '>Tutorial: Intro to React</div>
             <div className='text-blue-200'>This tutorial doesn’t assume any existing React knowledge.</div>
        </div>
            <div className='flex h-66 w-full justify-between flex-col mt-8  gap-4'>
               <div className='text-3xl font-black '>Before We Start the Tutorial</div>
               <div>We will build a small game during this tutorial. <span className='font-bold'>You might be tempted to skip it because you’re not building games — but give it a chance.</span> The techniques you’ll learn in the tutorial are fundamental to building any React app, and mastering it will give you a deep understanding of React.</div>
             <div className='bg-yellow-100  px-5 py-5 border-l-8 border-yellow-200 '>
                 <div className='font-bold'>Tip</div>
                  <div>This tutorial is designed for people who prefer to <span className='font-bold'>learn by doing.</span> If you prefer learning concepts from the ground up, check out our <span className='bg-blue-100'>step-by-step guide. </span>You might find this tutorial and the guide complementary to each other.</div>
              </div>
              <div className='flex h-66 w-full justify-between flex-col mt-8  gap-2'>
                <div>The tutorial is divided into several sections:</div>
                <li><span className='bg-blue-100'>Setup for the Tutorial</span>will give you <span className='font-bold'>a starting point </span>to follow the tutorial.</li>
                <li><span className='bg-blue-100'>Overview </span>will teach you <span className='font-bold'>the fundamentals</span> of React: components, props, and state.</li>
                <li><span className='bg-blue-100'>Completing the Game</span> will teach you <span className='font-bold'>the most common techniques </span>in React development.</li>
                <li><span className='bg-blue-100'>Adding Time Travel</span> will give you <span className='font-bold'>a deeper insight</span> into the unique strengths of React.</li>
              </div>
               
            </div>  
                     
  
      
      </div>
      </div>
    </div>
  );
}

export default Layout
