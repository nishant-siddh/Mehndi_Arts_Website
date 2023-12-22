import galleryImg1 from "../images/extra/galleryImg1.png";
import galleryImg2 from "../images/extra/galleryImg2.png";
import galleryImg3 from "../images/extra/galleryImg3.png";
import galleryImg4 from "../images/extra/galleryImg4.png";
import galleryImg5 from "../images/extra/galleryImg5.png";
import galleryImg6 from "../images/extra/galleryImg6.png";
import galleryImg7 from "../images/extra/galleryImg7.png";
import galleryImg8 from "../images/extra/galleryImg8.png";
import galleryImg9 from "../images/extra/galleryImg9.png";
import galleryImg10 from "../images/extra/galleryImg10.png";
import galleryImg11 from "../images/extra/galleryImg11.png";
import galleryImg12 from "../images/extra/galleryImg12.png";
import galleryImg13 from "../images/extra/galleryImg13.png";
import galleryImg14 from "../images/extra/galleryImg14.png";
import galleryImg15 from "../images/extra/galleryImg15.png";
import galleryImg16 from "../images/extra/galleryImg16.png";
import galleryImg17 from "../images/extra/galleryImg17.png";
import galleryImg18 from "../images/extra/galleryImg18.png";
import galleryImg19 from "../images/extra/galleryImg19.png";
import galleryImg20 from "../images/extra/galleryImg20.png";

const Gallery = () => {
  return (
    <div>
      <div className="container mx-auto flex flex-col gap-10 px-2">
        <div className="relative w-fit mx-auto mt-32">
          <h2 className="text-3xl font-bold text-center">Gallery</h2>
          <span className="absolute -bottom-4 left-0 w-10 h-2 bg-[#DAA520]"></span>
        </div>

        <div className="flex gap-3 flex-wrap items-center justify-center mx-auto">
          <img src={galleryImg1} alt="mehndi design" className="lazy-drop-animation w-60 h-72 rounded-lg hover:shadow-2xl transition-all duration-200" />
          <img src={galleryImg2} alt="mehndi design" className="lazy-drop-animation w-60 h-72 rounded-lg hover:shadow-2xl transition-all duration-200" />
          <img src={galleryImg3} alt="mehndi design" className="lazy-drop-animation w-60 h-72 rounded-lg hover:shadow-2xl transition-all duration-200" />
          <img src={galleryImg4} alt="mehndi design" className="lazy-drop-animation w-60 h-72 rounded-lg hover:shadow-2xl transition-all duration-200" />
          <img src={galleryImg5} alt="mehndi design" className="lazy-drop-animation w-60 h-72 rounded-lg hover:shadow-2xl transition-all duration-200" />
          <img src={galleryImg6} alt="mehndi design" className="lazy-drop-animation w-60 h-72 rounded-lg hover:shadow-2xl transition-all duration-200" />
          <img src={galleryImg7} alt="mehndi design" className="lazy-drop-animation w-60 h-72 rounded-lg hover:shadow-2xl transition-all duration-200" />
          <img src={galleryImg8} alt="mehndi design" className="lazy-drop-animation w-60 h-72 rounded-lg hover:shadow-2xl transition-all duration-200" />
          <img src={galleryImg9} alt="mehndi design" className="lazy-drop-animation w-60 h-72 rounded-lg hover:shadow-2xl transition-all duration-200" />
          <img src={galleryImg10} alt="mehndi design" className="lazy-drop-animation w-60 h-72 rounded-lg hover:shadow-2xl transition-all duration-200" />
          <img src={galleryImg11} alt="mehndi design" className="lazy-drop-animation w-60 h-72 rounded-lg hover:shadow-2xl transition-all duration-200" />
          <img src={galleryImg12} alt="mehndi design" className="lazy-drop-animation w-60 h-72 rounded-lg hover:shadow-2xl transition-all duration-200" />
          <img src={galleryImg13} alt="mehndi design" className="lazy-drop-animation w-60 h-72 rounded-lg hover:shadow-2xl transition-all duration-200" />
          <img src={galleryImg14} alt="mehndi design" className="lazy-drop-animation w-60 h-72 rounded-lg hover:shadow-2xl transition-all duration-200" />
          <img src={galleryImg15} alt="mehndi design" className="lazy-drop-animation w-60 h-72 rounded-lg hover:shadow-2xl transition-all duration-200" />
          <img src={galleryImg16} alt="mehndi design" className="lazy-drop-animation w-60 h-72 rounded-lg hover:shadow-2xl transition-all duration-200" />
          <img src={galleryImg17} alt="mehndi design" className="lazy-drop-animation w-60 h-72 rounded-lg hover:shadow-2xl transition-all duration-200" />
          <img src={galleryImg18} alt="mehndi design" className="lazy-drop-animation w-60 h-72 rounded-lg hover:shadow-2xl transition-all duration-200" />
          <img src={galleryImg19} alt="mehndi design" className="lazy-drop-animation w-60 h-72 rounded-lg hover:shadow-2xl transition-all duration-200" />
          <img src={galleryImg20} alt="mehndi design" className="lazy-drop-animation w-60 h-72 rounded-lg hover:shadow-2xl transition-all duration-200" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
