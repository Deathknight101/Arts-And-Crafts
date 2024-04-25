import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const Banner = () => {
    return (

        <div data-aos="flip-left" className='mb-10 mt-2 relative'>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide><div>
                    <img src="https://i.ibb.co/C15cf56/pexels-cherryyphoto-4729072.jpg" className="rounded-lg w-full aspect-video object-cover" /></div></SwiperSlide>
                <SwiperSlide><div>
                    <img src="https://i.ibb.co/fNM7Cvk/pexels-sener-baydar-76103764-8585387.jpg" className="rounded-lg w-full aspect-video object-cover" />
                </div></SwiperSlide>
                <SwiperSlide><div>
                    <img src="https://i.ibb.co/fx2pCDr/pexels-shkrabaanthony-4442022.jpg" className="rounded-lg w-full aspect-video object-cover" />
                </div></SwiperSlide>
            </Swiper>

            <div className='absolute w-full h-1/2 bg-black bottom-[25%] z-10 bg-opacity-60 flex flex-col gap-y-1 md:gap-y-10 justify-center items-center'>
                <h1 className='font-bold text-sm md:text-5xl text-center text-white font-mono'>Discover Your Inner Artist!</h1>
                <button className='btn text-black bg-white border-white hover:bg-white hover:border-black btn-xs md:btn-lg uppercase font-mono rounded-none'>Explore</button>
            </div>




            {/* <div className="carousel aspect-video">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="/src/assets/images/brian-babb-XbwHrt87mQ0-unsplash.jpg" className="rounded-lg w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="/src/assets/images/digital-marketing-agency-ntwrk-g39p1kDjvSY-unsplash.jpg" className="rounded-lg w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="/src/assets/images/webaliser-_TPTXZd9mOo-unsplash.jpg" className="rounded-lg w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div> */}

        </div>

    );
};

export default Banner;