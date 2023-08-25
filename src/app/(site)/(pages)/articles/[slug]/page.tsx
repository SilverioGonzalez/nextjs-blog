
import { RichTextComponents } from "@/app/(site)/components/RichTextComponents";
import ScheduleMeeting from "@/app/(site)/components/scheduleMeeting";
import SocialLinks from "@/app/(site)/components/socialLinks";
import {Article} from "@/app/(site)/lib/interface";
import { client } from "@/app/(site)/lib/sanity";
import { PortableText } from "@portabletext/react";



async function getData(slug: string) {
    const query =`*[_type == "article" && slug.current == "${slug}"][0]`;

    const data = await client.fetch(query);

    return data;
}

export default async function SlugPage({
    params,
}: {
    params: { slug: string };
}) {
    const data = (await getData(params.slug)) as Article;

    return (
        <main className="px-4">
            <div className="sm:px-24 lg:px-64">
                <h1 className="text-5xl font-bold py-8">{data.title}</h1>
                <div>
                    <PortableText value={data.content} components={RichTextComponents}/>
                </div>
                <div>
                    <ScheduleMeeting />
                </div>  
            </div> 
        </main>
        )
}
   