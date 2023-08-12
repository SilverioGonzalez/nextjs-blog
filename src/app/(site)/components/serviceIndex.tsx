import Link from "next/link";
import { client } from "../lib/sanity"
import { Service } from "../lib/interface";
import { urlFor } from "../lib/sanityImageUrl";

async function getData() {
    const query = `*[_type == "service"]`;
    const data = await client.fetch(query);
    return data;
}

export default async function ServiceIndex (){
    const data = await getData() as Service[];
    return(
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((service)=> (
                <div key={service._id}>
                    <Link href={`/services/${service.slug.current}`} prefetch>
                        <div className="border h-full border-gray-600 hover:scale-105 align-bottom duration-300 hover:shadow-lg hover:shadow-violet-400">
                            <img src={urlFor(service.coverImage).width(800).height(400).url()} />
                            <div className="p-8">
                                <h3 className="text-3xl font-bold">{service.title}</h3>
                                <p className="tracking-tight">{service.overview}</p>
                                <p>read more</p>     
                            </div> 
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}