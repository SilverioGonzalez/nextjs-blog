import { createClient } from "next-sanity";

const projectId ='yxdcfe0l';
const dataset = 'production';
const apiVersion = '2023-07-10';


export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
})


