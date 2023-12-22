import aboutImg from '../images/extra/aboutImage.png'

const About = () => {
  return (
    <div className='mt-20 bg-[#ffffeb] py-20'>
      <div className="container mx-auto flex flex-wrap gap-7 items-center justify-center">
        <div className="md:w-[40%]">
          <img src={aboutImg} alt="about image of mehndi design" className='lazy-drop-animation about_img w-96 rounded-tr-[70px] rounded-bl-[70px]' />
        </div>
        <div className="flex flex-col gap-8 md:w-[45%] items-center justify-center">
          <div className="relative w-fit mx-auto">
            <h2 className="text-3xl font-bold text-center">About us</h2>
            <span className="absolute -bottom-4 left-0 w-10 h-2 bg-[#DAA520]"></span>
          </div>
          <p className="text-sm text-zinc-500 px-10 md:px-0">At <b>Keshav Mehndi Studio</b>, we are a passionate team led by Keshav, a <b>skilled Mehndi artist</b> With expertise in diverse styles, including <b>Rajasthani, Marwadi, Madhubani, 3D, and bespoke bridal and groom designs</b>, we bring your Mehndi dreams to life. From intricate <b>traditional patterns to contemporary flair</b>, our artistry shines through in every stroke. Let us adorn your special moments with the beauty of Mehndi, blending tradition and trend seamlessly.</p>
        </div>
      </div>
    </div>
  );
};

export default About;

