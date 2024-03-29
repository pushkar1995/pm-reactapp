import React, { useState } from 'react'
import { BsFunnel, BsThreeDots } from "react-icons/bs";
import { BiSearchAlt2 } from 'react-icons/bi'

type Props = {
    onClickShowGridPage: () => void
    onClickShowTimelinePage: () => void
}


const SubHeader = (props: Props) => {
    const { onClickShowGridPage, onClickShowTimelinePage } = props
  return (
     <div className='p-4'>
        <div className='grid grid-flow-col col-span-2 p-2 md:row-span-2 '>
                <div className='flex p-2 px-3'>
                    <h3 className='text-purple-dark font-bold text-2xl'>Project Management</h3>
                    <ul className='p-2 px-3'>
                        <button type='button' className='px-3 text-grey font-semibold hover:underline' onClick={onClickShowGridPage}>Grid</button>
                        <button type='button' className='px-3 ml-3 text-grey font-semibold hover:underline' onClick={onClickShowTimelinePage}>Timeline</button>
                    </ul>
                </div>
                
                <ul className='grid grid-flow-col col-span-5 md:row-span-5'>
                    <div className=''>
                        <button type='button' className='bg-white text-xs font-semibold text-purple-dark border border-purple-dark h-8 w-28 rounded-3xl'>Shift Days</button>
                    </div>
                    {/* <div>
                        <button type='button' className='ml-3 text-xs text-white font-semibold bg-purple-dark border h-8 w-40 rounded-3xl'>Add Task</button> 
                    </div> */}
                    <div className='ml-3 mr-3'>
                        <input
                            type= 'text'
                            placeholder='Search'
                            className='p-4 border h-7 w-64 rounded-3xl text-center'
                        />
                        <BiSearchAlt2 className='-mt-6 ml-4 text-grey' />
                    </div>
                    {/* <div className='mr-3 mt-1 h-7 border border-white' /> */}
                    <div>
                        <button type='button' className='bg-white border border-purple-dark font-semibold text-xs text-purple-dark h-8 w-48 rounded-3xl'>Export Spreadsheet</button>
                    </div>
                    {/* <div className='ml-3 mt-1 h-7 border border-shadow' /> */}
                    <div className='p-2 text-purple-dark'>
                        <BsFunnel />
                    </div>
                    <div className='p-2'>
                        <BsThreeDots />
                    </div>
                </ul>
        </div>
        <div className='flex justify-end'>
            <hr className="mb-3 -mt-3 w-3/4 mr-12 border-white" />
        </div>
      </div>
  )
}

export default SubHeader