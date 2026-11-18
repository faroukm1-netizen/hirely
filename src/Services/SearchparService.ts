import { Api } from "../libs/Api";
import type { JobCardInterface } from "../types/JobCard";

export const getSearch = async():Promise<JobCardInterface[]>=>{
    const response = await Api.get<JobCardInterface[]>('')
    return response.data.slice(1,100)
}