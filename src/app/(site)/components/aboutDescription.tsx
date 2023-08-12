import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function AboutDescription() {
    return (
      <Link href="/about/">
        <div className="border h-full border-gray-600 hover:scale-105  duration-300 hover:shadow-lg hover:shadow-violet-400">
          <div className="p-8">
            <h2 className="text-4xl font-bold">Hi, I'm Silverio.</h2>
            <p className="pt-1 text-lg">I'm a content strategist and information architect who takes a human-centered approach 
                  to problem solving.
            </p>
            <div className="py-4 flex items-center">
              <div className="pb-1 pr-4 scale-125">
                <FaArrowRight />
              </div>
              <p>About me</p> 
            </div> 
          </div>
        </div>
      </Link>
    )
}