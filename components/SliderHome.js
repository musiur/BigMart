// Import Swiper React components
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";


import Food1 from "../static/images/food1.jpg";
import Food2 from "../static/images/food2.jpg";
import Food3 from "../static/images/food3.jpg";
import Food4 from "../static/images/food4.jpg";
import Food5 from "../static/images/food5.jpg";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

const SliderHome = () => {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide className="relative min-h-[50vh]">
                <Image src={Food1} alt="" layout="fill" objectFit="cover" objectposition="center" />
            </SwiperSlide>
            <SwiperSlide className="relative min-h-[50vh]">
                <Image src={Food2} alt="" layout="fill" objectFit="cover" objectposition="center" />
            </SwiperSlide>
            <SwiperSlide className="relative min-h-[50vh]">
                <Image src={Food3} alt="" layout="fill" objectFit="cover" objectposition="center" />
            </SwiperSlide>
            <SwiperSlide className="relative min-h-[50vh]">
                <Image src={Food4} alt="" layout="fill" objectFit="cover" objectposition="center" />
            </SwiperSlide>
            <SwiperSlide className="relative min-h-[200px]">
                <Image src={Food5} alt="" layout="fill" objectFit="cover" objectposition="center" />
            </SwiperSlide>
        </Swiper>
    );
};

export default SliderHome;