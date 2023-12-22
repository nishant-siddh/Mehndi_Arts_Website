import { NavLink } from 'react-router-dom'
import galleryImg1 from '../images/extra/galleryImg1.png'
import galleryImg2 from '../images/extra/galleryImg2.png'
import galleryImg3 from '../images/extra/galleryImg3.png'
import galleryImg4 from '../images/extra/galleryImg4.png'

const GalleryHomeSection = () => {
    return (
        <div className='flex flex-col gap-12 mt-20'>
            <div className='relative w-fit mx-auto'>
                <h2 className="text-3xl font-bold text-center">Our work</h2>
                <span className='absolute -bottom-4 left-0 w-10 h-2 bg-[#DAA520]'></span>
            </div>

            <div className='flex flex-col items-center'>
                <div className='flex flex-wrap gap-4 items-center justify-center mx-auto'>
                    <img src={galleryImg1} alt="gallery_img" className='lazy-drop-animation w-64 h-64 rounded-lg' />
                    <img src={galleryImg3} alt="gallery_img" className='lazy-drop-animation w-64 h-64 rounded-lg' />
                    <img src={galleryImg2} alt="gallery_img" className='lazy-drop-animation w-64 h-64 rounded-lg' />
                    <img src={galleryImg4} alt="gallery_img" className='lazy-drop-animation w-64 h-64 rounded-lg' />
                </div>

                <button className="bg-[#ecbb4a]/80 px-3 py-2 text-white rounded-full text-sm hover:bg-[#ecbb4a] mt-10">
                    <NavLink to='/gallery'>View More</NavLink>
                </button>
            </div>

        </div>
    )
}

export default GalleryHomeSection
