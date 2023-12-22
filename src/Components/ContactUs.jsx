import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { NavLink } from "react-router-dom";

const ContactUs = () => {
  return (
    <div className="mt-32 flex flex-col gap-10">
      <div className="relative w-fit mx-auto">
        <h2 className="text-3xl font-bold text-center">Contact us</h2>
        <span className="absolute -bottom-4 left-0 w-10 h-2 bg-[#DAA520]"></span>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.3008991918527!2d77.281713350183!3d28.68064431928675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd75595b7247%3A0x59a8abd0c0a9a8e3!2sKeshav%20Mehandi%20Arts!5e0!3m2!1sen!2sin!4v1703188209609!5m2!1sen!2sin"
        className="w-full mx-auto"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        // referrerpolicy="no-referrer-when-downgrade"
      />

      <div>
        <div className="container mx-auto flex flex-col gap-7 items-center justify-center">
          <div className="flex flex-col gap-8 md:w-[45%] items-center justify-center">
            <h2 className="text-2xl font-bold text-center">
              Keshav Mehandi Arts
            </h2>
            <p className="text-sm text-zinc-500 px-10 md:px-0 text-center">
              <b>Address:</b> 1/1, 1st Floor, Opposite Metro Pillar No. 184,
              Near Tilak Nagar Metro Station, New Delhi, Delhi 110018
            </p>
            <p className="text-sm text-zinc-500 px-10 md:px-0 text-center">
              <b>Phone:</b> +91 8384015480
            </p>
            <p className="text-sm text-zinc-500 px-10 md:px-0 text-center">
              <b>Email:</b> info@keshavMehandiarts.com
            </p>
          </div>

          <div className="flex flex-wrap gap-3 text-white">
            <NavLink to="https://www.facebook.com/profile.php?id=100092168865888&mibextid=vk8aRt">
              <div className="bg-blue-500/80 hover:bg-blue-500 cursor-pointer rounded-full p-2">
                <TiSocialFacebook className="text-2xl" />
              </div>
            </NavLink>

            <NavLink to="https://www.instagram.com/keshavmehandiarts?igsh=MTNiYzNiMzkwZA==">
              <div className="bg-blue-500/80 hover:bg-blue-500 cursor-pointer rounded-full p-2">
                <TiSocialInstagram className="text-2xl" />
              </div>
            </NavLink>

            <NavLink to="https://youtube.com/@keshavmehandiarts?si=tbeeOQjGK0HP78fn">
              <div className="bg-red-600/80 hover:bg-red-600 cursor-pointer rounded-full p-2">
                <TiSocialYoutube className="text-2xl" />
              </div>
            </NavLink>
            <div className="bg-blue-700/80 hover:bg-blue-700 cursor-pointer rounded-full p-2">
              <TiSocialLinkedin className="text-2xl" />
            </div>
            <div className="bg-blue-600/80 hover:bg-blue-600 cursor-pointer rounded-full p-2">
              <TiSocialTwitter className="text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
