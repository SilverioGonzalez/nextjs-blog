
import { RichTextComponents } from "@/app/(site)/components/RichTextComponents";
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
                <div>
                <h1 className="hidden text-5xl font-bold py-8">{data.title}</h1>
                </div>
                <div>
                    <h2 className="py-4 text-xl font-bold">{data.overview}</h2>
                </div>
                <div className="">
                    <PortableText value={data.content} components={RichTextComponents}/>
                </div>
                <div className="py-8">
                    <SocialLinks />
                </div>  
            </div> 
        </main>
    )
}
   