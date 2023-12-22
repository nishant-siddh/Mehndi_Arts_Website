import img1 from "../images/heroSection/img1.jpg";
import img2 from "../images/heroSection/img2.jpg";
import img3 from "../images/heroSection/img3.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-[#4E6659] pt-20 md:pt-48 md:pb-20">
      <div className="container mx-auto flex lg:flex-row items-center z-[990]">
        <div className="lg:w-1/2 relative">
          <img
            src={img1}
            alt="mahndi_design"
            className="w-full md:w-[400px] md:ml-20 opacity-[0.4] md:opacity-[0.6]"
          />
          <div className="md:block hidden">
            <img
              src={img2}
              alt="mahndi_design"
              className="absolute -top-20 left-80 w-[180px] h-[250px] ml-20 opacity-[0.9]"
            />
            <img
              src={img3}
              alt="mahndi_design"
              className="absolute -bottom-20 -left-20 w-[180px] h-[250px] ml-20 opacity-[0.9]"
            />
          </div>
        </div>

        <div className="lg:w-1/2 lg:ml-8 absolute md:right-3 text-[#FFFFF0] ml-10 md:ml-0">
          <p className="text-2xl md:text-4xl">
            Hi, I am <span className="font-semibold">Keshav</span>
          </p>
          <div className="animated-text text-2xl md:block hidden">
            A Professional Artist Mastering <span></span>
          </div>
          <div>
            <p className="text-2xl md:hidden block">
              your guide to{" "}
              <span className="text-[#ff7f50]">
                mesmerizing Mehndi artistry
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
