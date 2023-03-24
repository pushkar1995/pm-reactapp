import React from 'react'
import { Task } from '../pmapp.types'

interface GridTaskListProps {
  taskArray: Task[],
  onDeleteClickHnd(id: Number): any,
}

const GridList = (props: GridTaskListProps) => {
  const { taskArray, onDeleteClickHnd } = props
  return (
    <div className='table-auto rounded border-separate border-spacing-y-4 p-2'>
      <table className="table-auto w-full rounded border-separate border-spacing-y-4 p-5">
        <thead className='text-center text-grey text-sm font-semibold p-4 py-2'>
          <tr className="text-PrimaryText p-4 py-2">
            <th className="font-medium">Mode</th>
            <th className="font-medium">Completion</th>
            <th className="font-medium">ID</th>
            <th className="font-medium">Name</th>
            <th className="font-medium">Milestone?</th>
            <th className="font-medium">Initial Estimation</th>
            <th className="font-medium">Current Estimation</th>
            <th className="font-medium">Start</th>
            <th className="font-medium">End</th>
            <th className="font-medium">Resource</th>
            <th className="font-medium">Status</th>
            <th className="font-medium">Dep</th>
            <th className="font-medium">Priority</th>
            <th className="font-medium">Actual</th>
            <th className="font-medium">Description</th>
            <th className="font-medium">Inv.Milestone</th>
            <th className="font-medium">Label</th>
          </tr>
        </thead>
        <tbody className="table-row-group">
          {taskArray?.map((task) => {
            console.log(task)
          return (
            <div className='flex'>
               <button
                    type='button'
                    title='Delete'
                    className='pr-2 text-pinkyred'
                    onClick={() => onDeleteClickHnd(task.id)} 
                >X</button>
              <tr
                className="text-PrimaryText bg-PrimaryBgC rounded"
              >
                  <td className="">{task.mode}</td>
                  <td className="">{task.completion}</td>
                  {/* <td className="">{task.id}</td> */}
                  <td className="">{task.name}</td>
                  <td className="">{task.milestone}</td>
                  <td className="">{task.initialEstimation}</td>
                  <td className="">{task.currentEstimation}</td>
                  <td className="">{task.start}</td>
                  <td className="">{task.end}</td>
                  <td className="">{task.resource}</td>
                  <td className="">{task.status}</td>
                  <td className="">{task.dep}</td>
                  <td className="">{task.priority}</td>
                  <td className="">{task.actual}</td>
                  <td className="">{task.description}</td>
                  <td className="">{task.invMilestone}</td>
                  <td className="">{task.label}</td>
              </tr>
            </div>
          )
      })}
        </tbody>
      </table>
    </div>
  )
}

export default GridList

