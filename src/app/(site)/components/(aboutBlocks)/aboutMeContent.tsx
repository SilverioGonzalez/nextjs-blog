import {PortableText} from '@portabletext/react'
import { UiContent } from "../../lib/interface";
import { client } from "../../lib/sanity";
import { RichTextComponents } from '../(CMSComponents)/RichTextComponents';
import { urlFor } from '../../lib/sanityImageUrl';



async function getData() {
    const query =`*[_type == "uiContent" && title == "About me"]`;
    const data = await client.fetch(query);
    return data;
}

  
export default async function AboutMeContent(){
        const data = await getData() as UiContent[];
        return(
            <div>
                {data.map((data)=> (
                    <div key={data._id}>
                        <PortableText value={data.content} components={RichTextComponents}/>
                        <div className=" py-8 grid grid-cols-3 content-center">
                            <div></div>
                            <div>
                                {<img src={urlFor(data.coverImage).width(300).height(400).url()} />}
                            </div>
                            <div></div>
                        </div>
                    </div>
                    ))}
            </div>
        )
    }
       
    

    
