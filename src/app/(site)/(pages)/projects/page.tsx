import FeaturedProjects from "../../components/featuredProjectBlock";
import SocialLinks from "../../components/socialLinks";
import ProjectsNotFeatured from "../../components/projectsNotFeatured";
import ScheduleMeeting from "../../components/scheduleMeeting";


export default function projects () {
    return (
        <main className="min-h-screen px-4 md:px-12 lg:px-20">
            <section className="pt-4">
                <div>
                    <h1 className="text-5xl font-bold md:text-8xl lg:text-9xl">
                        <span className="text-violet-400">Projects</span>
                    </h1>    
                    <div className="border-b-2 py-4"></div>
                    <div className="py-4">
                        <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl">Examples of my work and process</h2>                
                    </div>
                </div>
            </section>

            <section>
                <div className="hidden md:contents lg:contents">
                    <SocialLinks />
                </div>
            </section>
            
            <section className="py-12">
                <div>
                    <p className="font-bold text-4xl">Featured projects and case studies</p>
                </div>
                <div className="py-8">
                    <FeaturedProjects />
                </div>
                <ScheduleMeeting />
            </section>

            {/*
            <section className="py-4">
                <div>
                    <p className="font-bold text-4xl">More projects and case studies</p>
                </div>
                <div className="py-8">
                    <ProjectsNotFeatured />
                </div>
            </section>
            */}

        </main>
    )
}