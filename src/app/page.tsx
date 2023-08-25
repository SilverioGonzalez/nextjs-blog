import SocialProof from "./(site)/components/(aboutBlocks)/socialProofBlock";
import SocialLinks from "./(site)/components/(CallToActionComponents)/socialLinks";
import AboutDescription from "./(site)/components/(aboutBlocks)/aboutDescription";
import ServiceDescription from "./(site)/components/(servicesBlocks)/serviceDescription";
import FeaturedProjects from "./(site)/components/(projectAndCaseStudiesBlocks)/featuredProjectBlock";
import ScheduleMeeting from "./(site)/components/(CallToActionComponents)/scheduleMeeting";

export default function Home() {
  return (
    <main className="min-h-screen px-4 md:px-12 lg:px-20">

        <section className="py-4">
          <div className="text-5xl font-bold md:text-8xl lg:text-9xl">
            <h1>Making digital <span className="text-violet-400">strategy</span> more human</h1>
            <div className="border-b-2 py-4"></div>
           </div>
           {/* hidden main image for home page */}
           <div className="hidden">
            <img src= "https://cdn.sanity.io/images/yxdcfe0l/production/1a59f429517e340447c21a27411405bce02734d8-1200x628.png" />
           </div>

          <div className="py-4">
            <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl">Solving content and information problems</h2>
          </div>
          
          <div className="hidden md:contents lg:contents">
            <SocialLinks />
          </div>
        </section>

        <section className="py-12">
          <div><p className="font-bold text-4xl pb-12">Featured projects and case studies</p></div>
          <FeaturedProjects />
        </section>

        <section className="py-12">
          <div className="grid lg:grid-cols-2 gap-8">
            <AboutDescription />
            <ServiceDescription />
          </div>
          <div>
            <ScheduleMeeting />
          </div>
        </section>
        {/* 
        <section className="py-12">
          <SocialProof />
        </section>
        */}
        
      </main>
     
    )
  }