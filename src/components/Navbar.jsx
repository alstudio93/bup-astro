import { useState } from "react"

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

  const [open, setOpen] = useState(false)

  return (
    <div id="stylingWrapper" className="w-full shadow-md mb-5 p-4 fixed top-0 z-40 bg-white">
      <nav className="flex justify-between items-center w-full max-w-section mx-auto ">
        <img src="/assets/logo.webp" className="w-20" />
        <ul className={` lg:flex gap-x-3  text-center font-[Nunito] font-normal ${open ? "flex flex-col  gap-y-8 fixed top-14 left-0 right-0 min-h-screen bg-[#ffffff] text-base pt-20 overflow-y-scroll pb-[120px]" : "hidden text-sm"}`}>
          {
            Links.map((link) => (
              <div>
                <li key={link.title} className=" pb-10">
                  <a href={link.location}>{link.title}</a>
                </li>
                <hr className="w-4/5 mx-auto" />
              </div>
            ))
          }
          <div className="lg:hidden blob w-full" />
        </ul>
        <i className="fas fa-bars cursor-pointer lg:hidden text-xl" onClick={() => setOpen(open => !open)}></i>
      </nav>
    </div>
  )
}


export default Navbar
