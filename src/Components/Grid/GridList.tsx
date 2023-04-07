import React from 'react'
import { Task } from '../pmapp.types'
import { AiTwotoneEdit } from "react-icons/ai"
import { BsFlag } from "react-icons/bs"

interface GridTaskListProps {
  taskArray: Task[],
  onDeleteClickHnd(id: Number): any,
  onEdit: (data: Task) => void
  toogleMilestoneFlag: any
}

const GridList = (props: GridTaskListProps) => {
  const { taskArray, onDeleteClickHnd, onEdit,toogleMilestoneFlag } = props

  // const isDate =(endDate: any) => {
  //   return taskArray.endDate === Date
  // }
  // console.log(isDate)

  return (
    // <div className=''>
      <table className="table-auto w-full rounded border-separate  pt-4">
        <thead className='text-center text-grey text-sm font-semibold'>
          <tr className="text-PrimaryText">
            <th className="font-medium px-8">Mode</th>
            <th className="font-medium px-8">Completion</th>
            <th className="font-medium px-8">ID</th>
            <th className="font-medium px-8">Name</th>
            <th className="font-medium px-8">Milestone?</th>
            <th className="font-medium px-8">Initial Estimation</th>
            <th className="font-medium px-8">Current Estimation</th>
            <th className="font-medium px-8">Start</th>
            <th className="font-medium px-8">End</th>
            <th className="font-medium px-8">Resource</th>
            <th className="font-medium px-8">Status</th>
            <th className="font-medium px-8">Dep</th>
            <th className="font-medium px-8">Priority</th>
            <th className="font-medium px-8">Actual</th>
            <th className="font-medium px-8">Description</th>
            <th className="font-medium px-8">Inv.Milestone</th>
            <th className="font-medium px-8">Label</th>
          </tr>
        </thead>
        <tbody className="table-row-group text-sm">
          {taskArray?.map((task, id) => {
            // console.log(task)
          return (
            <>
              <button
                title='Edit'
                type='button'
                className='mr-2'
                onClick={() => onEdit(task)}
               >
                <AiTwotoneEdit />
              </button>
              <button
                type='button'
                title='Delete'
                className='text-pinkyred'
                onClick={() => onDeleteClickHnd(task.id)} 
              >X</button>
              <tr
                className="-pt-6"
                >   
                <td className="px-8">{task.mode}</td>
                <td className="px-8">{task.completion}</td>
                <td className="px-8">id</td>
                <td className="px-8">{task.name}</td>
                <td className="px-8">
                  {/* {task.milestone} */}
                  <BsFlag
                    onChange={() => toogleMilestoneFlag(task.id)}
                    // className={`${task.milestone ? 'fill-pinkyred' : ''}`}
                  />
                </td>
                <td className="px-8">{task.initialEstimation}</td>
                <td className="px-8">{task.currentEstimation}</td>
                <td className="px-8">
                    {/* {task.startDate} */}
                    {/* <input 
                        title='StartDate'
                        type='date'
                        // placeholder='Start'
                        // className='h-15 w-15 mx-8 border'
                        // value={startDate}
                        // onChange={handleStartDateChange}
                    /> */}
                </td>
                <td className="px-8">
                  {/* {task.endDate} */}
                </td>
                <td className="px-8">{task.resource}</td>
                <td className="px-8">{task.status}</td>                    
                <td className="px-8">{task.dep}</td>
                <td className="px-8">{task.priority}</td>
                <td className="px-8">{task.actual}</td>
                <td className="px-8">{task.description}</td>
                <td className="px-8">{task.invMilestone}</td>
                <td className="px-8">{task.label}</td>
            </tr>
          </>
          )
      })}
        </tbody>
      </table>
    // </div>
  )
}

export default GridList

