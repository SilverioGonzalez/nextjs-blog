import Link from "next/link";

export default function ScheduleMeeting() {
    return (
      <div className="py-8">
        <div className="border p-8">
          <h2 className="text-4xl font-bold">Are you are working on a challenging information project?</h2>
          <p className="py-4 tracking-tight text-lg">I would love to hear about your work and see if I can help.</p>
          <Link href="https://calendly.com/silverio-web-contact/office-hours">
            <button className="bg-violet-400 hover:scale-105  duration-300">
                <p className="p-4 tracking-tight text-black text-lg">
                  Schedule a free meeting
                </p>
            </button>
          </Link>
        </div>
      </div>
    )
}

