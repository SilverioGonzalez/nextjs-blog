import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { client } from "../lib/sanity"
import { Service } from "../lib/interface";

async function getData() {
    const query = `*[_type == "service"]`;
    const data = await client.fetch(query);
    return data;
}

export default async function ServicesBlock() {
  const data = await getData() as Service[];
    return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
      {data.map((service)=> (
        <div key={service._id}>
          <div className="p-4 py-8">
            <div>
              <div className="border h-full border-gray-600 hover:scale-105 duration-300 hover:shadow-lg hover:shadow-violet-400">
                <div className="p-8">
                <Link href={`/services/${service.slug.current}`} prefetch>
                    <h2 className="text-4xl text-violet-400 font-bold">{service.title}</h2>
                    <p className="text-lg pt-1">{service.overview}
                    </p>
                    <div className="py-4 flex items-center">
                    <div className="pb-1 pr-4 scale-125">
                      <FaArrowRight />
                    </div>
                    <p>Learn more</p> 
                  </div> 
                </Link>
              </div>
            </div>
          </div>
        </div>
       </div>       
      ))}
    </div>
    )
}

