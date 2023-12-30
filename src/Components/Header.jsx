import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const services = [
    {
      to: "rajasthani-mehndi",
      name: "Rajasthani Mehndi",
    },
    {
      to: "madhubani-mehndi",
      name: "Madhubani Mehndi",
    },
    {
      to: "bridal-mehndi",
      name: "Bridal Mehndi",
    },
    {
      to: "3d-mehndi",
      name: "3D Mehndi",
    },
    {
      to: "engagement-mehndi",
      name: "Engagement Mehndi",
    },
    {
      to: "festival-mehndi",
      name: "Festival Mehndi",
    },
  ];

  useEffect(() => {
    if (isServicesOpen) {
      setIsServicesOpen(true);
    } else {
      setIsServicesOpen(false);
    }
  }, [isServicesOpen]);

  return (
    <nav
      className={`w-full fixed top-0 z-40 bg-[#4E6659] ease-in-out shadow-xl px-5`}
    >
      <div
        className={`container mx-auto md:px-10 flex justify-between items-center transition-all duration-300`}
      >
        <img
          src={logo}
          alt="Logo"
          className={`lazy-drop-animation w-24 h-20 sm:w-28 sm:h-24`}
        />
        <div
          className={`w-full sm:w-fit m-0 absolute top-[5.3rem] left-0 sm:relative sm:top-0 bg-[#4E6659] ${
            isNavOpen ? "py-5" : "py-0"
          } transition-all duration-300`}
        >
          <ul
            className={`list ${
              isNavOpen ? "flex flex-col gap-5 mx-auto" : "hidden"
            } sm:flex-row justify-between items-center gap-10 sm:flex text-[#FFFFF0]/90 hover: text-[#FFFFF0]`}
          >
            <li>
              <NavLink to="/" onClick={() => setIsNavOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <a
                href="/#aboutSection"
                className="cursor-pointer"
                onClick={() => setIsNavOpen(false)}
              >
                About Us
              </a>
            </li>
            <li>
              <NavLink to="/gallery" onClick={() => setIsNavOpen(false)}>
                Gallery
              </NavLink>
            </li>
            <li>
              <div
                className="flex items-center cursor-pointer"
                onClick={() => setIsServicesOpen((prev) => !prev)}
              >
                <NavLink to="#">Services</NavLink>
                <span className="text-lg">
                  {isServicesOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                </span>
              </div>
              <div
                className={`absolute bg-[#FFFFF0] z-50 top-10 sm:top-14 left-0 w-44 text-[#4E6659] flex-col ${
                  isServicesOpen ? "flex" : "hidden"
                }`}
              >
                {services.map((service) => (
                  <>
                    <span className="py-2 px-3 hover:bg-[#e7a316] hover:text-[#FFFFF0]">
                      <NavLink
                        to={`/services/${service.to}`}
                        onClick={() => {
                          setIsServicesOpen(false), setIsNavOpen(false);
                        }}
                      >
                        {service.name}
                      </NavLink>
                    </span>
                  </>
                ))}
              </div>
            </li>
            <li>
              <NavLink to="/contact-us" onClick={() => setIsNavOpen(false)}>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        <div
          className="flex sm:hidden"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          {!isNavOpen ? (
            <GiHamburgerMenu className="text-[#FFFFF0] text-lg" />
          ) : (
            <RxCross1 className="text-[#FFFFF0] text-lg" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
