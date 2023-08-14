import Link from "next/link";
import { client } from "../lib/sanity"
import { urlFor } from "../lib/sanityImageUrl";
import { Project } from "../lib/interface";
import { FaArrowRight } from "react-icons/fa6";

async function getData() {
    const query = `*[_type == "project" && featured == true]`;
    const data = await client.fetch(query);
    return data;
}

export default async function FeaturedProjects (){
    const data = await getData() as Project[];
    return(
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((project)=> (
                <div key={project._id}>
                    <Link href={`/projects/${project.slug.current}`} prefetch>
                        <div className="border h-full border-gray-600 hover:scale-105 align-bottom duration-300 hover:shadow-lg hover:shadow-violet-400">
                            <img src={urlFor(project.coverImage).width(800).height(400).url()} />
                            <div className="p-8">
                                <h3 className="hidden text-3xl font-bold">{project.title}</h3>
                                <p className="pt-2 text-lg tracking-tight">{project.shortDescription}</p>
                                <div className="py-4 flex items-center">
                                    <div className="pb-1 pr-4 scale-125">
                                        <FaArrowRight />
                                    </div>
                                    <p>Read more</p> 
                                </div> 
                            </div>   
                        </div>
                    </Link> 
                </div>
            ))}
        </div>
    )
}
