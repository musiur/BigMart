// Import Swiper React components
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  // Navigation
} from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";

const SliderHome = () => {
  const tempArr = [1, 2, 3, 4, 5, 6, 7];
  return (
    <Swiper
      // spaceBetween={40}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      // navigation={true}
      modules={[Autoplay, Pagination]}
      className="mySwiper min-h-[25vh] rounded-xl h-[100%] w-[100%]"
    >
      {tempArr.map((item, i) => {
        return (
          <SwiperSlide className="relative h-[100%] w-[100%] rounded-xl" key={i}>
            <Image
              src={`/static/images/webp/banner${item}.webp`}
              alt=""
              layout="fill"
              objectFit="cover"
              objectposition="center"
              className="rounded-xl"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SliderHome;
