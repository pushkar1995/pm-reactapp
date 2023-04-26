import React,{useState, ChangeEvent} from 'react'
import { Task } from '../pmapp.types'

type EditTaskFormProps ={
  currentData: Task,
  onUpdateClickHnd: (data: Task) => void,
  clearEditFormHandler: () => void
}

const EditGridForm = (props: EditTaskFormProps) => {
    const { currentData, onUpdateClickHnd,clearEditFormHandler } = props
    const [ updatedModeTitle, setUpdatedModeTitle ] = useState(currentData.mode)
    const [ updatedName, setUpdatedName ] = useState(currentData.name)
    // const [ updatedMilestone, setUpdatedMilestone ] = useState(currentData.milestone)
    // const [ updatedInitialEstimation, setUpdatedInitialEstimation ] = useState(currentData.initialEstimation)
    const [ updatedCurrentEstimation, setUpdatedCurrentEstimation ] = useState(currentData.currentEstimation)
    const [ updatedStartDate, setUpdatedStartDate ] = useState<any>(currentData.startDate)
    const [ updatedEndDate, setUpdatedEndDate ] = useState<any>(currentData.endDate)
    const [ updatedResource, setUpdatedResource ] = useState(currentData.resource)
    const [ updatedStatus, setUpdatedStatus ] = useState(currentData.status)
    const [ updatedDep, setUpdatedDep ] = useState(currentData.dep)
    const [ updatedPriority, setUpdatedPriority ] = useState(currentData.priority)
    const [ updatedActual, setUpdatedActual ] = useState(currentData.actual)
    const [ updatedDescription, setUpdatedDescription ] = useState(currentData.description)
    const [ updatedInvMilestone, setUpdatedInvMilestone ] = useState(currentData.invMilestone)
    const [ updatedLabel, setUpdatedLabel ] = useState(currentData.label)

     const handleModeChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setUpdatedModeTitle(e.target.value)
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setUpdatedName(e.target.value)
    }

    // const handleMilestoneChange = (e: ChangeEvent<HTMLInputElement>): void => {
    //     setUpdatedMilestone(e.target.value)
    // }


    // const handleInitialEstimation = (e: ChangeEvent<HTMLInputElement>): void => {
    //     setUpdatedInitialEstimation(e.target.value)
    // }

    const handleCurrentEstimation = (e: ChangeEvent<HTMLInputElement>): void => {
        setUpdatedCurrentEstimation(e.target.value)
    }

    const handleStartDateChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setUpdatedStartDate(e.target.value)
    }

    const handleEndDateChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setUpdatedEndDate(e.target.value)
    }

    const handleResourceChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setUpdatedResource(e.target.value)
    }

    const handleStatusChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setUpdatedStatus(e.target.value)
    }

    const handleDepChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setUpdatedDep(e.target.value)
    }

    const handlePriorityChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setUpdatedPriority(e.target.value)
    }

    const handleActualChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setUpdatedActual(e.target.value)
    }

    const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setUpdatedDescription(e.target.value)
    }

    const handleInvMilestoneChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setUpdatedInvMilestone(e.target.value)
    }

    const handleLabelChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setUpdatedLabel(e.target.value)
    }

    const onEditTodoBtnClickHnd = (e: any) => {
        e.preventDefault()
        const updatedData: Task = {
            id: currentData.id,
            mode: updatedModeTitle,
            completion: currentData.completion,
            name: updatedName,
            milestone: currentData.milestone,
            initialEstimation: currentData.initialEstimation,
            currentEstimation: updatedCurrentEstimation,
            startDate: updatedStartDate,
            endDate: updatedEndDate,
            resource: updatedResource,
            status: updatedStatus,
            dep: updatedDep,
            priority: updatedPriority,
            actual: updatedActual,
            description: updatedDescription,
            invMilestone: updatedInvMilestone,
            label: updatedLabel
        }
        onUpdateClickHnd(updatedData)
        clearEditFormHandler()
      }


  return (
    <form
        className='flex flex-row'
        onSubmit={onEditTodoBtnClickHnd} 
    >
        <input 
            title='Mode'
            type='text'
            placeholder='Mode'
            className='h-15 w-14 mx-8 border'
            value={updatedModeTitle}
            onChange={handleModeChange}
          />

          <input 
            title='Comletion'
            className='h-15 w-14 mx-8 border'
            value={currentData.completion}
            // onChange={handleMilestoneChange}
          />

          <input 
            title='Name'
            type='text'
            placeholder='Name'
            className='h-15 mx-8 border'
            value={updatedName}
            onChange={handleNameChange}
          />
          {/* <input 
            title='Milestone'
            className='h-15 w-14 mx-8 border'
            value={currentData.milestone}
          /> */}
          <input 
            title='Initial Estimation'
            // placeholder='Initial Estimation'
            className='h-15 w-14 mx-8 border'
            value={currentData.initialEstimation}
            // onChange={handleInitialEstimation}
          />
          <input 
            title='Current Estimation'
            type='text'
            placeholder='Current Estimation'
            className='h-15 w-14 mx-8 border'
            value={updatedCurrentEstimation}
            onChange={handleCurrentEstimation}

          />
          <input 
            title='StartDate'
            type='text'
            placeholder='Start'
            className='h-15 w-15 mx-8 border'
            value={updatedStartDate}
            onChange={handleStartDateChange}
            // ref={dateInputRef}
          />
          <input 
            title='EndDate'
            type='text'
            placeholder='End'
            className='h-15 w-15 mx-8 border'
            value={updatedEndDate}
            onChange={handleEndDateChange}
          />
          <input 
            title='Resource'
            type='text'
            placeholder='Resource'
            className='h-15 mx-8 border'
            value={updatedResource}
            onChange={handleResourceChange}
          />
          <input 
            title='Status'
            type='text'
            placeholder='Status'
            className='h-15 w-14 mx-8 border'
            value={updatedStatus}
            onChange={handleStatusChange}
          />
          <input 
            title='Dep'
            type='text'
            placeholder='Dep'
            className='h-15 w-14 mx-8 border'
            value={updatedDep}
            onChange={handleDepChange}
          />
          <input 
            title='Priority'
            type='text'
            placeholder='Priority'
            className='h-15 w-14 mx-8 border'
            value={updatedPriority}
            onChange={handlePriorityChange}
          />
          <input 
            title='Actual'
            type='text'
            placeholder='Actual'
            className='-15 w-14 mx-8 border'
            value={updatedActual}
            onChange={handleActualChange}
          />
          <input 
            title='Description'
            type='text'
            placeholder='Description'
            className='h-15 mx-8 border'
            value={updatedDescription}
            onChange={handleDescriptionChange}
          />
          <input 
            title='Inv. Milestone'
            type='text'
            placeholder='Inv. Milestone'
            className='h-15 mx-8 border'
            value={updatedInvMilestone}
            onChange={handleInvMilestoneChange}
          />
          <input 
            title='Label'
            type='text'
            placeholder='Label'
            className='h-15 mx-8 border'
            value={updatedLabel}
            onChange={handleLabelChange}
          />
          <button
            type='submit'
            className='p-2 text-blue border rounded bg-grey'
          >Edit</button>
    </form>
  )
}

export default EditGridForm