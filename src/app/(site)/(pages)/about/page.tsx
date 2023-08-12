import AboutMeContent from "../../components/aboutMeContent";
import SocialLinks from "../../components/socialLinks";
import SocialProof from "../../components/socialProofBlock";

export default function about () {
    return (
        <main className="min-h-screen p-24">
            <section>
                <div>
                    <h1 className="text-5xl font-bold md:text-8xl lg:text-9xl">
                        <span className="text-violet-400">About</span>
                    </h1>    
                    <div className="border-b-2 py-4"></div>
                    <div className="py-4">
                        <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl">My experince and values</h2>                
                    </div>
                </div>
            </section>

            <section>
                <div className="hidden md:contents lg:contents">
                    <SocialLinks />
                </div>
            </section>
            
            <section className="py-12">
                <AboutMeContent />
            </section>
            {/* 
            <section className="p-4 py-12">
                <SocialProof />
            </section>
            */}
        </main>
    )
}