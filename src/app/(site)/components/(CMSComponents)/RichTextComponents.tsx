import Image from "next/image";
import { urlFor } from "../../lib/sanityImageUrl";
import Link from "next/link";


export const RichTextComponents = {
  types: {
    image: ({ value }: any) =>{
      return (
        <div className="py-2">
          <Image 
          className=""
          src={urlFor(value).url()}
          width={1200} height={628}
          alt="post image"
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-5 text-lg list-disc">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="py-5 text-lg list-decimal"></ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-5xl font-bold py-1 pt-5">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-4xl font-bold py-1 pt-5">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="py-1 pt-5 font-bold text-3xl">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="py-1 pt-5 font-bold text-2xl">{children}</h4>
    ),
    normal: ({ children }: any) => (
      <p className="py-2 text-lg">{children}</p> 
    ),
    blockquote: ({ children }: any) =>(
      <blockquote className="py-2 text-lg">{children}</blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <Link href={value.href}
        rel={rel}
        className="underline decoration-violet-400 hover:text-violet-400"
      >
        {children}</Link>
          
        );
      },
    },
}

