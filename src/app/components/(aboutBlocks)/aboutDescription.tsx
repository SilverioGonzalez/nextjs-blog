import Link from "next/link";

export default function AboutDescription() {
    return (
      <div className="py-8">
        <div className="border p-8">
        <h2 className="text-4xl font-bold">Hi, I'm Silverio.</h2>
            <p className="pt-2 pb-4 tracking-tight text-lg">I'm a digital strategist who takes a human-centered approach 
                  to problem solving.
            </p>
          <Link href="/experience">
            <button className="bg-violet-400 hover:scale-105  duration-300">
                <p className="p-4 tracking-tight text-black text-lg">
                  About me
                </p>
            </button>
          </Link>
        </div>
      </div>
    )
}
