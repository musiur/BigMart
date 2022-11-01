// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { Card, Col, Row, Button, Text } from "@nextui-org/react";

// Import Swiper styles
import "swiper/css";

const CategoriesSlider = () => {
  const categoriesArray = [
    "Baking Goods",
    "Breads",
    "Breakfast",
    "Canned",
    "Dairy",
    "Frozen Foods",
    "Fruits and Vegetable",
    "Hard Drinks",
    "Health and Hygiene",
    "Household",
    "Meat",
    "Others",
    "Seafood",
    "Snack Foods",
    "Soft Drinks",
    "Starchy Foods",
  ];
  return (
    <div className="sectionG">
      <Text h1 size={40} b className="text-center mb-5">
        All Categories
      </Text>
      <Swiper
        // spaceBetween={20}
        // centeredSlides={true}
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
        {categoriesArray.map((item, i) => {
          return (
            <SwiperSlide key={i} className="pt-5 pb-10">
              <Card
                css={{ w: "100%", h: "200px", border: "0" }}
                className="shadow hover:shadow-xl"
              >
                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                  <Col>
                    <Text
                      size={12}
                      weight="bold"
                      transform="uppercase"
                      color="#ffffffAA"
                    >
                      New
                    </Text>
                    <Text h3 color="black">
                      Acme camera
                    </Text>
                  </Col>
                </Card.Header>
                <Card.Body css={{ p: 0 }}>
                  <Card.Image
                    src="https://nextui.org/images/card-example-6.jpeg"
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    alt="Card example background"
                  />
                </Card.Body>
                <Card.Footer
                  isBlurred
                  css={{
                    position: "absolute",
                    bgBlur: "#ffffff66",
                    borderTop:
                      "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                    bottom: 0,
                    zIndex: 1,
                  }}
                >
                  <Button flat auto rounded color="primary" className="mx-auto">
                    <Text
                      css={{ color: "white" }}
                      size={12}
                      weight="bold"
                      transform="uppercase"
                    >
                      {item}
                    </Text>
                  </Button>
                </Card.Footer>
              </Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CategoriesSlider;
