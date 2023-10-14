import AboutMeContent from "../../../components/(aboutBlocks)/aboutMeContent";
import ScheduleMeeting from "../../../components/(CallToActionComponents)/scheduleMeeting";
import SocialLinks from "../../../components/(CallToActionComponents)/socialLinks";
import SocialProof from "../../../components/(aboutBlocks)/socialProofBlock";

export default function about () {
    return (
        <main className="min-h-screen px-4 md:px-12 lg:px-20">
            <section className="pt-4">
                <div className="text-5xl font-bold md:text-8xl lg:text-9xl">
                    <h1>
                        <span className="text-violet-400">About</span>
                    </h1>
                </div>
                <div className="border-b-2 py-4"></div>
                <div className="font-bold text-4xl md:text-5xl lg:text-6xl">
                    <h2>My experience and values</h2>                
                </div>
            </section>

            <section>
                <div className="hidden md:contents lg:contents">
                    <SocialLinks />
                </div>
            </section>
            
            <section className="py-12">
                <AboutMeContent />
                <ScheduleMeeting />
            </section>
            {/* 
            <section className="p-4 py-12">
                <SocialProof />
            </section>
            */}
        </main>
    )
}