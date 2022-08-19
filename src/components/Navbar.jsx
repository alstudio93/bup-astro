import { useState } from "react"
import { AiOutlineMail } from "react-icons/ai"

const Navbar = () => {
  const Links = [
    {
      title: "Home",
      location: "/"
    },
    {
      title: "BŪP Smart Devices",
      location: "/"
    },
    {
      title: "Features",
      location: "/"
    },
    {
      title: "Mockups",
      location: "/"
    },
    {
      title: "Pricing",
      location: "/"
    },
    {
      title: "FAQ",
      location: "/"
    },
    // {
    //   title: "Contact",
    //   location: "/"
    // },
    {
      title: "Login",
      location: "/"
    },
  ]

  return (
    <div id="stylingWrapper" className="w-full shadow-md mb-5 p-4 fixed top-0 z-40 bg-white">
      <nav className="flex justify-between w-full max-w-section mx-auto ">
        <img src="/assets/logo.webp" className="w-20" />
        <ul className="flex gap-x-3 text-sm items-center font-[Nunito] font-normal">
          {
            Links.map((link) => (
              <li key={link.title}>
                <a href={link.location}>{link.title}</a>
              </li>
            ))
          }


        </ul>

      </nav>
    </div>
  )
}


export default Navbar