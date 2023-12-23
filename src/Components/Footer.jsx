import logo from "../images/logo.png";
import { IoIosPhonePortrait } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { IoMail } from "react-icons/io5";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#4E6659] mt-20 text-[#FFFFF0]">
      <div className="container mx-auto px-10">
        <div className="flex flex-wrap items-center justify-between md:px-28 py-5">
          <div className="mx-auto lg:m-0">
            <img src={logo} alt="logo" className="lazy-drop-animation w-32 sm:w-44" />
          </div>

          <div className="flex flex-col items-start gap-7 md:w-fit text-sm">
            <div className="relative w-fit">
              <h2 className="text-3xl">Contact us</h2>
              <span className="absolute -bottom-4 left-0 w-10 h-2 bg-[#DAA520]"></span>
            </div>

            <div className="flex justify-start flex-col items-start gap-2 text-sm">
              <div className="flex items-center justify-center gap-1">
                <IoIosPhonePortrait className="text-base" />
                <p className="flex justify-center items-center gap-2">
                  <span>+91 8384015480</span>
                </p>
              </div>

              <div className="flex items-center gap-1 w-fit">
                <CiLocationOn className="text-base" />
                <div className="flex justify-center items-center gap-2">
                  <p className="flex flex-wrap">
                    1/9299, Main Rohtash Nagar road, Babarpur, Near Bhavya
                    Collection, Shahdara, Delhi
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-1">
                <IoMail className="text-base" />
                <p className="flex justify-center items-center gap-2">
                  <span>info@keshavMehandiarts.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 md:px-24 text-sm mt-10">
          <p>Providing On Location Mehandi Services in India</p>
          <p>
            Delhi | Ghaziabad | Haryana | Faridabad | Gurgaon | Noida | and all other states of India
          </p>
        </div>

        <hr className="h-1 my-5" />

        <div className="flex flex-wrap gap-4 items-center justify-center md:px-24 lg:justify-between mb-5">
          <p className="text-sm">
            © 2021 Keshav Mehandi Arts. All Rights Reserved | Web design by
            <NavLink to='https://digitalvyaparkendra.com/' className="text-blue-400"> Digital Vyapar Kendra</NavLink>
          </p>
          <div className="flex flex-wrap gap-3">

            <NavLink to='https://www.facebook.com/profile.php?id=100092168865888&mibextid=vk8aRt'>
              <div className="bg-blue-500/80 hover:bg-blue-500 cursor-pointer rounded-full p-2">
                <TiSocialFacebook className="text-2xl" />
              </div>
            </NavLink>

            <NavLink to='https://www.instagram.com/keshavmehandiarts?igsh=MTNiYzNiMzkwZA=='>
              <div className="bg-blue-500/80 hover:bg-blue-500 cursor-pointer rounded-full p-2">
                <TiSocialInstagram className="text-2xl" />
              </div>
            </NavLink>

            <NavLink to='https://youtube.com/@keshavmehandiarts?si=tbeeOQjGK0HP78fn'>
              <div className="bg-red-600/80 hover:bg-red-600 cursor-pointer rounded-full p-2">
                <TiSocialYoutube className="text-2xl" />
              </div>
            </NavLink>

            <NavLink to=''>
              <div className="bg-blue-700/80 hover:bg-blue-700 cursor-pointer rounded-full p-2">
                <TiSocialLinkedin className="text-2xl" />
              </div>
            </NavLink>

            <NavLink to='https://x.com/keshavmehandiar?t=vzczT4s8zztdFhod7yqERA&s=09'>
              <div className="bg-blue-600/80 hover:bg-blue-600 cursor-pointer rounded-full p-2">
                <TiSocialTwitter className="text-2xl" />
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
