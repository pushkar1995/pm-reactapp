import React, { FC, useState, useEffect } from 'react'
import LoadingMsg from '../Components/CustomMessage/LoadingMessage'
import ErrorMsg from '../Components/CustomMessage/ErrorMessage'
import useGridTableData from '../hooks/useGridTableData'
import GridList from '../Components/Grid/GridList'
import GTable from '../Components/Grid/GTable'
import AddTaskForm from '../Components/Grid/AddTaskForm'
import EditTaskForm from '../Components/Grid/EditTaskForm'
import { PageEnum, dummyTaskList, Task } from '../Components/pmapp.types'


const Grid = () => {
  const [taskList, setTaskList] = useState(dummyTaskList as Task[])
  const [showForm, setShowForm] = useState(PageEnum.grid)
  const [editTask, setEditTask] = useState({} as Task)

  const onAddTaskClickHnd = () => {
    setShowForm(PageEnum.addFormInTable)
  }

  const addTask = (data: Task) :void => {
    setTaskList([...taskList, data])
  }

  const deleteTask = (id: Number) => {
    setTaskList(taskList.filter((task) => {
      return task.id !== id
    }))
  }

  const showTableList = () => {
    setShowForm(PageEnum.grid)
  }

  // Edit Task
  const editTaskData = (data: Task) => {
    setShowForm(PageEnum.editFormInTable)
    setEditTask(data)
  }

  const updateTask = (data:Task) => {
    setTaskList(taskList.map(task => ({
      ...task,
      mode: task.id === data.id ? data.mode: task.mode,
      name: task.id === data.id ? data.name: task.name,
      currentEstimation: task.id === data.id ? data.currentEstimation: task.currentEstimation,
      endDate: task.id === data.id ? data.endDate: task.endDate,
      resource: task.id === data.id ? data.resource: task.resource,
      status: task.id === data.id ? data.status: task.status,
      dep: task.id === data.id ? data.dep: task.dep,
      priority: task.id === data.id ? data.priority: task.priority,
      actual: task.id === data.id ? data.actual: task.actual,
      invMilestone: task.id === data.id ? data.invMilestone: task.invMilestone,
      label: task.id === data.id ? data.label: task.label,
    })))
  }

  return (
    <div className='mx-10 pb-5 bg-white rounded overflow-x-auto'>
      {/* <GTable
         taskArray={taskList}
         onDeleteClickHnd={deleteTask}
      /> */}
      <GridList
        taskArray={taskList}
        onDeleteClickHnd={deleteTask}
        onEdit = {editTaskData}
      />
      {showForm === PageEnum.addFormInTable && (
          <AddTaskForm
              onAddTaskClickBtnHandler={addTask}
              toClearAddFormHandler={showTableList} 
            />
     )}
     {showForm === PageEnum.editFormInTable && ( 
        <EditTaskForm
          currentData={editTask}
          onUpdateClickHnd={updateTask}
          clearEditFormHandler={showTableList}
        />
      )}
      <div className='w-full'>
            <hr className="-mb-2 mt-5 w-full border-grey" />
      </div>
      <div className='pt-5'>
        <button onClick={onAddTaskClickHnd}>+ Add Task</button>
      </div>
    </div>
  )
}

export default Grid