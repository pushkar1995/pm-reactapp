import { BASE_URL } from "../utils";
import { useQuery } from "react-query"

const getGridTableData = async () => {
    const result = await fetch(`${BASE_URL}/planets`)

    return [
        {
            mode: 'auto',
            completion: '67%',
            id: 1,
            name: 'Initiating',
            milestone: 'Flag',
            initialEstimation: '8hrs',
            currentEstimation: '10hrs',
            startDate: "StartDate",
            endDate: "EndDate",
            resource: '',
            status: 'In Progess',
            dep: 'abcd', 
            priority: 'high',
            actual: '19hrs',
            description: '',
            invMilestone: '',
            label: 'Test Tags'
        },
        {
            mode: 'auto',
            completion: '44%',
            id: 2,
            name: 'Planning',
            milestone: 'Flag',
            initialEstimation: '8hrs',
            currentEstimation: '10hrs',
            startDate: 'Start',
            endDate: 'Date',
            resource: '',
            status: 'In Progess',
            dep: 'abcd',
            priority: 'high',
            actual: '19hrs',
            description: '',
            invMilestone: '',
            label: 'Test Tags'
        }
    ]
}

export default function useGridTableData() {
    return useQuery(
        "gridTableDatas",
        getGridTableData
    )
}