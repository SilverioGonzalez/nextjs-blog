import { Person } from "../../lib/interface";
import { client } from "../../lib/sanity"
import { urlFor } from "../../lib/sanityImageUrl";

async function getData() {
    const query = `*[_type == "person" && socialProof == true && featuredSocialProof == true]`;
    const data = await client.fetch(query);
    return data;
}

export default async function SocialProof(){
    const data = await getData() as Person[];
    return(
    <div className="border p-8 border-gray-600">
    <h3 className="text-4xl font-bold pb-8">Testimonials</h3>

        <ul className="grid lg:grid-cols-2 gap-8">
            {data.map((person)=> (
            <li key={person._id}>
                <div className="p-8 grid border h-full shadow-md shadow-violet-400">
                    <div>
                        <p className="tracking-tight">{person.endorsement}</p>
                        <p className="tracking-tight">— {person.name}, {person.title}</p>   
                    </div>
                </div>
            </li>
        ))}
        </ul>
    </div>
           
    )
}