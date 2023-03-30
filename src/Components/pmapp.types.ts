export interface Task {
   mode: string;
   completion: string;
   id: Number;
   name: string;
   milestone: boolean;
   initialEstimation: string;
   currentEstimation: string;
   startDate: Date;
   endDate: Date;
   resource: string;
   status: string;
   dep: string;
   priority: string;
   actual: string;
   description: string;
   invMilestone: string;
   label: string
}

export const dummyTaskList: Task[] = [
   {
      mode: '80%',
      completion: '20%',
      id: new Date().getMilliseconds(),
      name: 'abcd',
      milestone: false,
      initialEstimation: '8 hrs',
      currentEstimation: '6 hrs',
      startDate: new Date(),
      endDate: new Date(),
      resource: 'allocate someone',
      status: 'In Progess',
      dep: '34',
      priority: 'High',
      actual: '12 hrs',
      description: 'Some Description',
      invMilestone: 'Look up Field',
      label: 'Some Tags'
   }
]

export enum PageEnum {
   grid,
   timeline,
   addFormInTable,
   editFormInTable
}