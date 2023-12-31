import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function ServiceDescription(){
    return (

    <div className="py-8">
      <div className="border p-8">
      <h2 className="text-4xl font-bold">My Services</h2>
          <p className="pt-2 pb-4 tracking-tight text-lg">I develop scalable solutions for digital products and services.
          </p>
        <Link href="/services">
          <button className="bg-violet-400 hover:scale-105  duration-300">
              <p className="p-4 tracking-tight text-black text-lg">
                Services
              </p>
          </button>
        </Link>
      </div>
    </div>
    )
}