import { RichTextComponents } from "@/app/components/(CMSComponents)/RichTextComponents";
import ScheduleMeeting from "@/app/components/(CallToActionComponents)/scheduleMeeting";
import SocialLinks from "@/app/components/(CallToActionComponents)/socialLinks";
import { Service } from "@/app/lib/interface";
import { client } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import Link from "next/link";


async function getData(slug: string) {
    const query =`*[_type == "service" && slug.current == "${slug}"][0]`;

    const data = await client.fetch(query);

    return data;
}

export default async function SlugPage({
    params,
}: {
    params: { slug: string };
}) {
    const data = (await getData(params.slug)) as Service;

    return (
        <div className="sm:px-24 lg:px-64">
            <h1 className="text-5xl font-bold py-8">{data.title}</h1>
            <div>
                <PortableText value={data.content} components={RichTextComponents}/>
            </div>
            <div>
                <ScheduleMeeting />
                <div>{data.relatedService}</div>
            </div>
        </div> 
    )
}
   