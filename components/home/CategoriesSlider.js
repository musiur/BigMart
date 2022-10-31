// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";

// Import Swiper styles
import 'swiper/css';
import { Text } from '@nextui-org/react';

const CategoriesSlider = () => {
    const tempArr = [1, 2, 3, 4, 5, 6];
    return (
        <div className="sectionG">
            <Text h1 size={40} b className="text-center mb-5">All Categories</Text>
            <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
            className="mySwiper my-10"
        >
            {
                tempArr.map((item, i) => {
                    return (
                        <SwiperSlide key={i} className="py-5">
                            <div className="p-5 shadow hover:shadow-xl rounded-lg text-center">Category {item}</div>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
        </div>
    );
};

export default CategoriesSlider;