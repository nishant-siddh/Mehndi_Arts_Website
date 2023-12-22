import madhubaniMehndi from "../images/madhubani_mehndi/img10.png";
import mehndi_3D from "../images/3D/img13.png";
import rajasthaniMehndi from "../images/rajasthani_mehndi/img14.jpg";
import engagementMehndi from "../images/engagement_mehndi/img12.png";
import { NavLink } from "react-router-dom";

const ServicesSection = () => {
  const mehndi_Array = [
    {
      img: madhubaniMehndi,
      title: "Madhubani Mehndi",
      description: "Immerse yourself in the enchanting world of Madhubani Mehndi with us.",
      to: "madhubani-mehndi"
    },
    {
      img: rajasthaniMehndi,
      title: "Rajasthani Mehndi",
      description: "Indulge in the timeless allure of Rajasthani Mehndi, a regal masterpiece.",
      to: "rajasthani-mehndi"
    },
    {
      img: mehndi_3D,
      title: "3D Mehndi",
      description: "Elevate your Mehndi experience with our stunning and intricate 3D designs.",
      to: "3d-mehndi"
    },
    {
      img: engagementMehndi,
      title: "Engagement Mehndi",
      description: "Crafting intricate Mehndi designs to add a touch of elegance to your engagement.",
      to: "engagement-mehndi"
    },
  ];

  return (
    <div className="flex flex-col gap-12 mt-20">
      <div className="relative w-fit mx-auto">
        <h2 className="text-3xl font-bold text-center">Services</h2>
        <span className="absolute -bottom-4 left-0 w-10 h-2 bg-[#DAA520]"></span>
      </div>
      <div className="flex flex-wrap gap-5 md:flex-row justify-center items-center">
        {mehndi_Array.map((item) => (
          <>
            <div className="flex flex-col gap-5 justify-center items-center w-64">
              <div className="w-fit h-fit bg-gray-200 rounded-lg flex-shrink-0">
                <img
                  src={item.img}
                  alt="madhubani_mehndi"
                  className="lazy-drop-animation rounded-lg h-64 w-64"
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-3">
                <h4 className="font-bold">{item.title}</h4>
                <p className="text-sm text-zinc-500 text-center">
                  {item.description}
                </p>
              </div>
              <NavLink to={`/services/${item.to}`}>
                <button className="bg-[#ecbb4a]/80 px-3 py-2 text-white rounded-full text-sm hover:bg-[#ecbb4a]">
                  Enquire Now
                </button>
              </NavLink>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
