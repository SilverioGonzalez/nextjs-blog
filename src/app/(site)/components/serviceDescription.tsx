import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function ServiceDescription(){
    return (
      <Link href="/services/">
        <div className="border h-full border-gray-600 hover:scale-105 duration-300 hover:shadow-lg hover:shadow-violet-400">
          <div className="p-8">
            <h2 className="text-4xl font-bold">My Services</h2>
            <p className="text-lg pt-1">I develop scalable solutions for digital products and services.
            </p>
            <div className="py-4 flex items-center">
              <div className="pb-1 pr-4 scale-125">
                <FaArrowRight />
              </div>
              <p>Services</p> 
            </div> 
          </div>
        </div>
      </Link>
    )
}