import React, { useState, ChangeEvent, useRef, useEffect } from 'react'
import { Task } from '../pmapp.types'
interface AddTaskFormProps {
    onAddTaskClickBtnHandler: (data: Task) => void
    toClearAddFormHandler: () => void
  }

const AddTForm = (props: AddTaskFormProps) => {
    const { onAddTaskClickBtnHandler,toClearAddFormHandler } = props
    const [ modeTitle, setModeTitle ] = useState('')
    const [ completion, setCompletion ] = useState('') 
    const [ name, setName ] = useState('')
    // const [ milestone, setMilestone ] = useState('')
    const [ initialEstimation, setInitialEstimation ] = useState('')
    const [ currentEstimation, setCurrentEstimation ] = useState('')
    const [ startDate, setStartDate ] = useState(new Date())
    const [ endDate, setEndDate ] = useState(new Date())
    const [ resource, setResource ] = useState('')
    const [ status, setStatus ] = useState('')
    const [ dep, setDep ] = useState('')
    const [ priority, setPriority ] = useState('')
    const [ actual, setActual ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ invMilestone, setInvMilestone ] = useState('')
    const [ label, setLabel ] = useState('')

    const handleModeChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setModeTitle(e.target.value)
    }

    const handleCompletionChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setCompletion(e.target.value)
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setName(e.target.value)
    }

    // const handleMilestoneChange = (e: ChangeEvent<HTMLInputElement>): void => {
    //     setMilestone(e.target.value)
    // }


    const handleInitialEstimation = (e: ChangeEvent<HTMLInputElement>): void => {
        setInitialEstimation(e.target.value)
    }

    const handleCurrentEstimation = (e: ChangeEvent<HTMLInputElement>): void => {
        setCurrentEstimation(e.target.value)
    }

    const handleStartDateChange = (e: ChangeEvent<Date>): void => {
        // setStartDate(e.target.value)
    }

    const handleEndDateChange = (e: ChangeEvent<HTMLInputElement>): void => {
        // setEndDate(e.target.value)
    }

    const handleResourceChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setResource(e.target.value)
    }

    const handleStatusChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setStatus(e.target.value)
    }

    const handleDepChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setDep(e.target.value)
    }

    const handlePriorityChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setPriority(e.target.value)
    }

    const handleActualChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setActual(e.target.value)
    }

    const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setDescription(e.target.value)
    }

    const handleInvMilestoneChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setInvMilestone(e.target.value)
    }

    const handleLabelChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setLabel(e.target.value)
    }


    const onAddTaskBtnClickHnd = (e: any): void => {
        e.preventDefault()
        const data: Task = {
            mode: modeTitle,
            completion: completion,
            id: new Date().getMilliseconds(),
            name: name,
            milestone: false,
            initialEstimation: initialEstimation,
            currentEstimation: currentEstimation,
            startDate: startDate,
            endDate: endDate,                
            resource: resource,
            status: status,
            dep: dep,                
            priority: priority,
            actual: actual,
            description: description,
            invMilestone: invMilestone,
            label: label  
        }
        onAddTaskClickBtnHandler(data)
        toClearAddFormHandler()
    }

  return (
    <form
        className='flex flex-row'
        onSubmit={onAddTaskBtnClickHnd} 
    >
        <input 
            title='Mode'
            type='text'
            placeholder='Mode'
            className='h-15 w-14 mx-8 border'
            value={modeTitle}
            onChange={handleModeChange}
          />
           <input 
            title='Completion'
            type='text'
            placeholder='Com'
            className='h-15 w-14 mx-8 border'
            value={completion}
            onChange={handleCompletionChange}
          />
           <input 
            title='Name'
            type='text'
            placeholder='Name'
            className='h-15 mx-8 border'
            value={name}
            onChange={handleNameChange}
          />
          {/* <input 
            title='Milestone'
            type='text'
            placeholder='Milestone'
            className='h-15 w-14 mx-8 border'
            value={milestone}
            onChange={handleMilestoneChange}
          /> */}
          <input 
            title='Initial Estimation'
            type='text'
            placeholder='Initial Estimation'
            className='h-15 w-14 mx-8 border'
            value={initialEstimation}
            onChange={handleInitialEstimation}
          />
          <input 
            title='Current Estimation'
            type='text'
            placeholder='Current Estimation'
            className='h-15 w-14 mx-8 border'
            value={currentEstimation}
            onChange={handleCurrentEstimation}

          />
          <input 
            title='StartDate'
            type='date'
            // placeholder='Start'
            // className='h-15 w-15 mx-8 border'
            // value={startDate}
            // onChange={handleStartDateChange}
          />
          <input 
            title='EndDate'
            type='date'
            // placeholder='End'
            // className='h-15 w-15 mx-8 border'
            // value={endDate}
            // onChange={handleEndDateChange}
          />
          <input 
            title='Resource'
            type='text'
            placeholder='Resource'
            className='h-15 mx-8 border'
            value={resource}
            onChange={handleResourceChange}
          />
          <input 
            title='Status'
            type='text'
            placeholder='Status'
            className='h-15 w-14 mx-8 border'
            value={status}
            onChange={handleStatusChange}
          />
          <input 
            title='Dep'
            type='text'
            placeholder='Dep'
            className='h-15 w-14 mx-8 border'
            value={dep}
            onChange={handleDepChange}
          />
          <input 
            title='Priority'
            type='text'
            placeholder='Priority'
            className='h-15 w-14 mx-8 border'
            value={priority}
            onChange={handlePriorityChange}
          />
          <input 
            title='Actual'
            type='text'
            placeholder='Actual'
            className='h-15 w-14 mx-8 border'
            value={actual}
            onChange={handleActualChange}
          />
          <input 
            title='Description'
            type='text'
            placeholder='Description'
            className='h-15 mx-8 border'
            value={description}
            onChange={handleDescriptionChange}
          />
          <input 
            title='Inv. Milestone'
            type='text'
            placeholder='Inv. Milestone'
            className='h-15 mx-8 border'
            value={invMilestone}
            onChange={handleInvMilestoneChange}
          />
          <input 
            title='Label'
            type='text'
            placeholder='Label'
            className='h-15 mx-8 border'
            value={label}
            onChange={handleLabelChange}
          />
          <button
            type='submit'
            className='p-2 text-blue border rounded bg-grey'
          >Add</button>
    </form>
  )
}

export default AddTForm