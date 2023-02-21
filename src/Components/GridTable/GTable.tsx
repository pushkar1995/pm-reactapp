import React, { useMemo } from 'react'
import { useTable, useSortBy } from 'react-table'
import useGridTableData from '../../hooks/useGridTableData'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'

const GTable = () => { 
    console.log(useGridTableData)
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const tableInstance = useTable({
        // columns: COLUMNS,
        // data: MOCK_DATA
        columns,
        data
    },
    useSortBy
    )

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance

  return (
    <table 
      {...getTableProps()}
      className='table-auto rounded border-separate border-spacing-y-4 p-2'
      >
      <thead className=''>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              // <th {...column.getHeaderProps(column.getSortByToggleProps())}
              <th {...column.getHeaderProps()}
                className='text-center text-grey text-sm font-semibold p-4 py-2'
              >
              {column.render('Header')}
              {/* <span>
                {column.isSorted ? (column.isSortedDesc ? 'D' : 'U') : ''}
              </span> */}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody 
        {...getTableBodyProps()}
        // className='table-row-group'
        >
        {rows.map((row) => {
          prepareRow(row)
          return (
            <tr 
              {...row.getRowProps}
              // className='text-PrimaryText table-row bg-PrimaryBgC rounded'
              >
              {row.cells.map((cell) => {
                return (
                  // <div className=''>
                    <td 
                    {...cell.getCellProps()}
                    className='text-center'
                    >
                    
                    {cell.render('Cell')}
                    </td>
                    // <hr className="w-auto border-grey" />
                  // </div>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
} 

export default GTable