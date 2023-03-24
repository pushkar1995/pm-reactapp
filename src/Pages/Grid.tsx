import React, { FC, useState } from 'react'
import LoadingMsg from '../Components/CustomMessage/LoadingMessage'
import ErrorMsg from '../Components/CustomMessage/ErrorMessage'
import useGridTableData from '../hooks/useGridTableData'
import GTable from '../Components/Grid/GTable'
import GridList from '../Components/Grid/GridList'
import AddTForm from '../Components/Grid/AddTaskForm'
import { PageEnum, dummyTaskList, Task } from '../Components/pmapp.types'


const Grid = () => {
  const [taskList, setTaskList] = useState(dummyTaskList as Task[])
  const [showForm, setShowForm] = useState(PageEnum.grid)

  const onAddTaskClickHnd = () => {
    setShowForm(PageEnum.addFormInTable)
  }

  const addTask = (data: Task) :void => {
    setTaskList([...taskList, data])
  }

  return (
    <div className='mx-10 pb-10 bg-white rounded overflow-x-auto'>
      <GTable
        taskArray={taskList} 
      />
      {/* <GridList
        taskArray={taskList}
      /> */}
      {showForm === PageEnum.addFormInTable && (
          <AddTForm
              onAddTaskClickBtnHandler={addTask} 
            />
     )} 
      <div>
        <button onClick={onAddTaskClickHnd}>+ Add Task</button>
      </div>
    </div>
  )
}

export default Grid