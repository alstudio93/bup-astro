import { useState } from "react"

const Navbar = ({ children }: { children: React.ReactNode }) => {
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
    {
      title: "Contact",
      location: "/"
    },
    {
      title: "Login",
      location: "/"
    },
  ]

  return (
    <div id="stylingWrapper" className="w-full shadow-md mb-5 p-4">
      <nav className="flex justify-between w-full px-10">
        {children}
        <ul className="flex gap-x-3 text-sm items-center font-[Nunito] font-normal ">
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