import {PortableText} from '@portabletext/react'
import { UiContent } from "../lib/interface";
import { client } from "../lib/sanity";
import { RichTextComponents } from './RichTextComponents';



async function getData() {
    const query =`*[_type == "uiContent" && title == "Services overview"]`;
    const data = await client.fetch(query);
    return data;
}

  
export default async function ServiceOverview(){
        const data = await getData() as UiContent[];
        return(
            <div>
                {data.map((data)=> (
                    <div key={data._id}>
                      <PortableText value={data.content} components={RichTextComponents}/>
                    </div>
                    ))}
            </div>
        )
    }
       
    

    
