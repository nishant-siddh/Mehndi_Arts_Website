import aboutImg from "../images/extra/aboutImage.png";

const About = () => {
  return (
    <div className="mt-[6.5rem] bg-[#ffffeb] py-[6.5rem]" id="aboutSection">
      <div className="container mx-auto flex flex-wrap gap-7 items-center justify-center">
        <div className="md:w-[40%]">
          <img
            src={aboutImg}
            alt="about image of mehndi design"
            className="lazy-drop-animation about_img w-96 rounded-tr-[70px] rounded-bl-[70px]"
          />
        </div>
        <div className="flex flex-col gap-8 md:w-[45%] items-center justify-center">
          <div className="relative w-fit mx-auto">
            <h2 className="text-3xl font-bold text-center">About us</h2>
            <span className="absolute -bottom-4 left-0 w-10 h-2 bg-[#DAA520]"></span>
          </div>
          <p className="text-sm text-zinc-500 px-10 md:px-0">
            Welcome to the enchanting world of <b>Keshav Mehndi Studio</b>,
            where artistry meets tradition in a symphony of intricate designs
            and vibrant hues. Under the creative guidance of Keshav, a masterful{" "}
            <b>Mehndi artist</b> with an unwavering passion for the craft, our
            studio is a testament to the seamless fusion of heritage and
            contemporary elegance.
            <br />
            <br />
            At <b>Keshav Mehndi Studio</b>, we pride ourselves on our versatile
            expertise, offering a kaleidoscope of Mehndi styles to suit every
            taste and occasion. Whether you envision the regal allure of{" "}
            <b>Rajasthani</b> patterns, the cultural richness of <b>Marwadi</b>{" "}
            designs, the storytelling charm of <b>Madhubani</b>, the captivating
            dimensionality of <b>3D art</b>, or the personalized touch of
            bespoke bridal and groom creations, our skilled artisans bring your
            Mehndi dreams to life with precision and flair.
            <br />
            <br />
            Step into a world where every stroke is a brushstroke of creativity,
            where <b>traditional patterns</b> intertwine gracefully with{" "}
            <b>contemporary flair</b>. Our commitment is to adorn your special
            moments with the timeless beauty of Mehndi, creating an artistic
            tapestry that mirrors your unique style and celebrates the union of
            tradition and trend.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
