import { Api } from "../libs/Api";
import type { JobCardInterface } from "../types/JobCard";

export const getCompany = async():Promise<JobCardInterface[]> =>{
const responsive = await Api.get<JobCardInterface[]>('')
return responsive.data.slice(1,100)
}