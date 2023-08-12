
import ServiceOverview from "../../components/serviceOverviewBlock";
import ServicesBlock from "../../components/servicesBlock";
import SocialLinks from "../../components/socialLinks";
import SocialProof from "../../components/socialProofBlock";

export default function ServicesPage () {
    return (
        <main className="min-h-screen px-4 md:px-12 lg:px-20">
            <section>
                <div>
                    <h1 className="text-5xl font-bold md:text-8xl lg:text-9xl">
                        <span className="text-violet-400">Services</span>
                    </h1>    
                    <div className="border-b-2 py-4"></div>
                    <div className="py-4">
                        <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl">Solutions to content and information problems</h2>                
                    </div>
                </div>
            </section>

            <section>
                <div className="hidden md:contents lg:contents">
                    <SocialLinks />
                </div>
            </section>

            <section className="py-8">
                <ServiceOverview />
            </section>

            <section className="py-4">
                <div className="py-4">
                    <h2 className="text-4xl font-bold">Learn about specific services</h2>
                </div>
                <div className="py-4">
                    <ServicesBlock />
                </div>
            </section>
            
             {/* 
            <section className="p-4 py-12">
            <SocialProof />
            </section>
            */}


        </main>
    )
}