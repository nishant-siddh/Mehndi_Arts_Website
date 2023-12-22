import { useParams } from "react-router-dom";
// 3d images
import img_3d_banner from "../images/3D/img20.jpg";
import img1_3d from "../images/3D/img4.png";
import img2_3d from "../images/3D/img9.png";
import img3_3d from "../images/3D/img13.png";

// rajashtani images
import img_rajashtani_banner from "../images/rajasthani_mehndi/img14.jpg";
import img1_rajashtani from "../images/rajasthani_mehndi/img11.png";
import img2_rajashtani from "../images/rajasthani_mehndi/img30.jpg";
import img3_rajashtani from "../images/rajasthani_mehndi/img31.jpg";
import img4_rajashtani from "../images/rajasthani_mehndi/img32.jpg";
import img5_rajashtani from "../images/rajasthani_mehndi/img33.jpg";

// madhubani images
import img_madhubani_banner from "../images/madhubani_mehndi/img2.png";
import img1_madhubani from "../images/madhubani_mehndi/img1.jpg";
import img2_madhubani from "../images/madhubani_mehndi/img6.jpg";
import img3_madhubani from "../images/madhubani_mehndi/img7.jpg";
import img4_madhubani from "../images/madhubani_mehndi/img8.png";
import img5_madhubani from "../images/madhubani_mehndi/img10.png";
import img6_madhubani from "../images/madhubani_mehndi/img15.png";
import img7_madhubani from "../images/madhubani_mehndi/img16.png";
import img8_madhubani from "../images/madhubani_mehndi/img17.png";
import img9_madhubani from "../images/madhubani_mehndi/img18.png";
import img10_madhubani from "../images/madhubani_mehndi/img19.png";

// festival images
import img_festival_banner from "../images/festival_mehndi/img35.jpg";
import img1_festival from "../images/festival_mehndi/img34.jpg";
import img2_festival from "../images/festival_mehndi/img36.jpg";

// bridal images
import img_bridal_banner from "../images/bridal_mehndi/img37.jpg";
import img1_bridal from "../images/bridal_mehndi/img38.jpg";
import img2_bridal from "../images/bridal_mehndi/img39.jpg";
import img3_bridal from "../images/bridal_mehndi/img40.jpg";
import img4_bridal from "../images/bridal_mehndi/img41.jpg";
import img5_bridal from "../images/bridal_mehndi/img42.jpg";

// engagement images
import img_engagement_banner from "../images/engagement_mehndi/img29.jpg";
import img1_engagement from "../images/engagement_mehndi/img12.png";
import img2_engagement from "../images/engagement_mehndi/img21.jpg";
import img3_engagement from "../images/engagement_mehndi/img22.jpg";
import img4_engagement from "../images/engagement_mehndi/img23.jpg";
import img5_engagement from "../images/engagement_mehndi/img25.jpg";
import img6_engagement from "../images/engagement_mehndi/img25.jpg";
import img7_engagement from "../images/engagement_mehndi/img26.jpg";
import img8_engagement from "../images/engagement_mehndi/img27.jpg";
import img9_engagement from "../images/engagement_mehndi/img28.jpg";

const ServicesPage = () => {
    const { name } = useParams();
    const word = name.split("-");
    const title = word
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
    const services = [
        {
            name: "3d-mehndi",
            description: `Introducing our enchanting 3D Mehndi service – a blend of traditional artistry with a modern twist! Our talented artist, Keshav, brings a touch of magic to the ancient art of Mehndi, giving it a whole new dimension.
            Imagine intricate henna designs that seem to leap off your skin, creating a stunning visual impact. With our 3D Mehndi, your hands and feet become canvases for mesmerizing patterns that captivate the eye and elevate your Mehndi experience.
            Whether it's a special occasion, a wedding, or simply a desire to adorn yourself with unique and beautiful henna art, our 3D Mehndi service is designed to add a touch of glamour to every moment. Keshav's skillful hands work wonders, creating designs that appear to pop and swirl, bringing life to the traditional Mehndi patterns.`,

            images: [
                img_3d_banner,
                img1_3d,
                img2_3d,
                img3_3d,
            ],
        },
        {
            name: "rajasthani-mehndi",
            description: `Indulge in the rich and vibrant tradition of Rajasthani Mehndi artistry with our specialized services! Our Rajasthani Mehndi designs are a perfect blend of cultural finesse and contemporary elegance. Adorn your hands and feet with intricate patterns that echo the timeless beauty of Rajasthan.
                Our skilled artist, brings to life the essence of Rajasthani Mehndi, capturing the intricate details and traditional motifs that make this art form truly exceptional. Each stroke tells a story, weaving together the cultural heritage of Rajasthan and the modern aesthetic.
                Whether you're preparing for a wedding, festival, or any special occasion, our Rajasthani Mehndi services add a touch of grace and tradition to your celebration. The designs are carefully crafted to reflect the opulence and grandeur of Rajasthan, creating a unique and memorable Mehndi experience.`,

            images: [
                img_rajashtani_banner,
                img1_rajashtani,
                img2_rajashtani,
                img3_rajashtani,
                img4_rajashtani,
                img5_rajashtani,
            ],
        },
        {
            name: "madhubani-mehndi",
            description: `Introducing our exquisite Madhubani Mehndi services, where tradition meets artistry! Immerse yourself in the rich heritage of Madhubani, a traditional Indian art form, beautifully translated onto your hands with the finesse of henna.
                Our skilled artist, intricately weaves cultural motifs, geometric patterns, and nature-inspired designs to create a tapestry of beauty on your hands. Each stroke tells a story, blending tradition and contemporary elegance seamlessly.
                Why choose Madhubani Mehndi? It's not just a design; it's a celebration of culture and individuality. Adorn your hands with the vibrant hues of Madhubani, and let the ancient art form become a part of your special moments.`,

            images: [
                img_madhubani_banner,
                img1_madhubani,
                img2_madhubani,
                img3_madhubani,
                img4_madhubani,
                img5_madhubani,
                img6_madhubani,
                img7_madhubani,
                img8_madhubani,
                img9_madhubani,
                img10_madhubani,
            ],
        },
        {
            name: "engagement-mehndi",
            description: `Celebrate the joy of love with our exquisite Engagement Mehndi services! Our skilled and talented artists, brings intricate henna designs to make your engagement ceremony even more special. Immerse yourself in the beauty of traditional mehndi patterns that elegantly symbolize the bond between you and your beloved.
                At Keshav Mehndi Arts, we understand the importance of this significant occasion and strive to create stunning mehndi designs that reflect your unique love story. Our Engagement Mehndi services add a touch of tradition and charm to your special day, leaving you with beautiful memories to cherish.`,

            images: [
                img_engagement_banner,
                img1_engagement,
                img2_engagement,
                img3_engagement,
                img4_engagement,
                img5_engagement,
                img6_engagement,
                img7_engagement,
                img8_engagement,
                img9_engagement,
            ],
        },
        {
            name: "festival-mehndi",
            description: `Celebrate the artistry of henna in a vibrant burst of colors at our Festival Mehndi service! Dive into a world where creativity meets tradition, and your hands become a canvas for intricate designs and cultural expressions. Our Festival Mehndi service is a delightful experience that adds a touch of elegance and joy to any celebration.
                Immerse yourself in the beauty of henna patterns expertly crafted by our talented artist, Keshav. From swirling floral motifs to geometric wonders, each design tells a unique story. Our Festival Mehndi is more than an art form; it's a celebration of culture, joy, and the timeless tradition of adorning hands with exquisite henna.`,

            images: [
                img_festival_banner,
                img1_festival,
                img2_festival,
            ],
        },
        {
            name: "bridal-mehndi",
            description: `Transform your bridal journey into a canvas of exquisite artistry with our Bridal Mehndi service. Our skilled artist, adds a touch of tradition and elegance to your special day. Each stroke of henna is a reflection of timeless beauty, capturing the essence of cultural richness.
                Indulge in the enchanting experience as Keshav intricately designs bridal mehndi patterns that symbolize love, joy, and new beginnings. Whether you prefer classic motifs or contemporary designs, our bespoke bridal mehndi service ensures a personalized touch that complements your style.`,

            images: [
                img_bridal_banner,
                img1_bridal,
                img2_bridal,
                img3_bridal,
                img4_bridal,
                img5_bridal,
            ],
        },
    ];

    return (
        <div className="mt-32">
            <div className="container mx-auto flex flex-col gap-16">
                <div className="relative w-fit mx-auto">
                    <h2 className="text-3xl font-bold text-center">{title}</h2>
                    <span className="absolute -bottom-4 left-0 w-10 h-2 bg-[#DAA520]"></span>
                </div>

                <div>
                    {services
                        .filter((service) => service.name === name)
                        .map((service) => {
                            return (
                                <>
                                    <div className="flex flex-col-reverse lg:flex-row justify-center gap-10 lg:gap-5 px-4">
                                        <p className="mt-5 text-base text-justify lg:w-1/2">
                                            {service.description}
                                            <br />
                                            <br />
                                            <p>For bookings and inquiries, reach out to us at <span className="text-[#DAA520] cursor-pointer">+91 8384015480</span> or drop us an email at <span className="text-[#DAA520] cursor-pointer">info@keshavMehandiarts.com</span>. Let Keshav's artistry make your moments truly unforgettable.</p>
                                        </p>
                                        <div className="lg:w-1/2 flex justify-center mt-10">
                                            <img src={service.images[0]} alt="mehndi image" className="service_page_image w-[80%] h-[30rem] rounded-tl-[70px] rounded-br-[70px]" />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-10">
                                        <div className="relative w-fit mx-auto mt-20">
                                            <h4 className="text-xl font-bold text-center">Related Images</h4>
                                            <span className="absolute -bottom-4 left-0 w-10 h-2 bg-[#DAA520]"></span>
                                        </div>
                                        <div className="flex gap-5 flex-wrap justify-center">
                                            {service.images && service.images.map((image) => {
                                                return (
                                                    <>
                                                        <img src={image} alt="mehndi image" className="w-64 h-64 rounded-xl" />
                                                    </>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
