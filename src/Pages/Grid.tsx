import React from 'react'

const Grid = () => {
  return (
    <div className=''>
     <table className="table-auto w-full rounded border-separate border-spacing-y-4 p-5">
        <thead>
          <tr className="text-PrimaryText">
            <th className="font-medium">Mode</th>
            <th className="font-medium">Completion</th>
            <th className="font-medium">ID</th>
            <th className="font-medium">Name</th>
            <th className="font-medium">Milestone?</th>
            <th className="font-medium">Initial Estimation</th>
            <th className="font-medium">Current Estimation</th>
            <th className="font-medium">Start</th>
          </tr>
        </thead>
        <tbody className="table-row-group">
            <tr
              className="text-PrimaryText bg-PrimaryBgC rounded mt-6"
            >
              <td className="projectName pl-10">Auto</td>
              <td className="description pl-8">80%</td>
              <td className="qaAssigned pl-8">xyz12</td>
              <td className="estBy pl-10">Planning</td>
              <td className="bugs pl-10">Flag</td>
              <td className="issues pl-10">8 Hrs</td>
              <td className="issues pl-10">18 Hrs</td>
              <td className="issues pl-10">12/15/2023</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Grid