import React, { useEffect, useState } from 'react'
import LoadingMsg from '../Components/CustomMessage/LoadingMessage'
import ErrorMsg from '../Components/CustomMessage/ErrorMessage'
import useGridTableData from '../hooks/useGridTableData'
import GTable from '../Components/GridTable/GTable'

const Grid = () => {
  // const { data, status, isLoading, error } = useGridTableData()
  // if (isLoading) {
  //   return <LoadingMsg />
  // }
  // if (error) { 
  //   return <ErrorMsg />
  // }
  return (
    <div className='mx-10 bg-white rounded overflow-x-auto'>
      <GTable />
     {/* <table className="table-auto w-full rounded border-separate border-spacing-y-4 p-5">
        <thead>
          <tr className="text-PrimaryText">
            <th className="font-medium">Mode</th>
            <th className="font-medium">Comple0.tion</th>
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
          {data?.map((item) => (
            <tr
            className="text-PrimaryText bg-PrimaryBgC rounded mt-6"
            >
            <td className="">{item.mode}</td>
            <td className="">{item.completion}</td>
            <td className="">{item.id}</td>
            <td className="">{item.name}</td>
            <td className="">{item.milestone}</td>
            <td className="">{item.initialEstimation}</td>
            <td className="">{item.currentEstimation}</td>
            <td className="">{item.startDate}</td>
            <td className="">{item.endDate}</td>
            <td className="">{item.resource}</td>
            <td className="">{item.status}</td>
            <td className="">{item.dep}</td>
            <td className="">{item.priority}</td>
            <td className="">{item.actual}</td>
            <td className="">{item.description}</td>
            <td className="">{item.invMilestone}</td>
            <td className="">{item.label}</td>
          </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  )
}

export default Grid