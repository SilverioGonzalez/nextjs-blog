
export default function Footer() {
  return (
    <footer className="border-t-2">
      <div className="py-8">
        <div className="container mx-auto px-5">
          <div className="py-12 flex flex-col lg:flex-row items-center">
            <p className="text-1xl lg:text-lg tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
              Created with Next.js and Sanity Studio
            </p>
            <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
                <p>@ Silverio Gonzalez 2023</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
