import ArticleIndex from "@/app/(site)/components/articleIndex";
import SocialLinks from "../../components/socialLinks";
import FeatruedArticles from "../../components/featuredArticles";


export default function ArticlePage () {
    return (
        <main className="min-h-screen p-24">
            <div>
                <div>
                    <h1 className="text-5xl font-bold md:text-8xl lg:text-9xl">
                        <span className="text-violet-400">Articles</span>
                    </h1>    
                    <div className="border-b-2 py-4"></div>
                    <div className="py-4">
                        <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl">Thoughts about content strategy, information architecture, and technology</h2>                
                    </div>
                </div> 
            </div>
            <section>
                <div className="hidden md:contents lg:contents">
                    <SocialLinks />
                </div>
            </section>

            <section className="py-12">
                <div className="py-8">
                    <ArticleIndex />
                </div> 
            </section>

            {/*

            <section className="py-12">
                <p className="font-bold text-4xl">
                    Featured articles
                </p>
                <div className="py-8">
                    <FeatruedArticles />
                </div>
                
            </section>

            <section className="py-12">
                <p className="font-bold text-4xl">
                    More articles
                </p>
                
                <div className="py-8">
                    <ArticleIndex />
                </div>
                
            </section>

            */}
            
        </main>
    )
}
    
        