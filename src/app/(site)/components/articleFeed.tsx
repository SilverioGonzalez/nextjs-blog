import Link from "next/link";
import { Article } from "../lib/interface";
import { client } from "../lib/sanity"
import { urlFor } from "../lib/sanityImageUrl";
import { FaArrowRight } from "react-icons/fa6";

async function getData() {
    const query = `*[_type == "article"]`;
    const data = await client.fetch(query);
    return data;
}

export default async function ArticleFeed (){
    const data = await getData() as Article[];
    return(
        <section>
            <div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.map((article)=> (
                    <div key={article._id}>
                       <Link href={`/articles/${article.slug.current}`} prefetch>
                        <div className="border h-full hover:scale-105 duration-300 hover:shadow-lg hover:shadow-violet-400">
                            {/*<img src={urlFor(article.coverImage).width(800).height(400).url()} />*/}
                            <div className="p-8">
                                <h3 className="text-3xl font-bold">{article.title}</h3>
                                <p className="text-sm text-violet-400 py-2">{new Date(article._createdAt).toISOString().split("T")[0]}</p>
                                <p className="tracking-tight">{article.overview}</p>
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
            </div>
        </section>
    )
}