import { SocialIcon } from "react-social-icons";


export default function SocialLinks () {
    return (
        <ul className="py-4 flex">
            <li className="px-2 hover:scale-110 ease-in duration-300">
              <SocialIcon url="https://www.linkedin.com/in/silverio-gonzalez-76b7ba88/" bgColor="#a78bfa" />
            </li>
            <li className="px-2 hover:scale-110 ease-in duration-300">
              <SocialIcon url="https://github.com/SilverioGonzalez" bgColor="#a78bfa" />
            </li>
            <li className="px-2 hover:scale-110 ease-in duration-300">
              {/* add a real email address*/}
              <SocialIcon url="mailto:place.holder@gmail.com" bgColor="#a78bfa" /> 
            </li>       
          </ul>
    )
}