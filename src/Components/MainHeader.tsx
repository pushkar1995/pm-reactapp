import React from 'react'
import { FaUserAlt } from 'react-icons/fa'

const MainHeader = () => {
  return (
    <div className='flex flex-row justify-between w-full shadow bg-white-light h-20'>
        <div className='px-10 py-8'>
            <h1>DOGMAGROUP</h1>
        </div>
        <div className='grid grid-cols-2 py-5 -mr-12'>
            <div className='pr-8 text-end'>
                <div className='text-sm font-bold'>John Doe</div>
                <div className='text-sm text-grey'>Project Manager</div>
            </div>
            <div className='mt-3'>
                <FaUserAlt />
            </div>
        </div>
    </div>
  )
}

export default MainHeader 