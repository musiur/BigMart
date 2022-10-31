// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { Card, Col, Row, Button, Text } from "@nextui-org/react";

// Import Swiper styles
import "swiper/css";

const CategoriesSlider = () => {
  const tempArr = [1, 2, 3, 4, 5, 6];
  return (
    <div className="sectionG">
      <Text h1 size={40} b className="text-center mb-5">
        All Categories
      </Text>
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
        {tempArr.map((item, i) => {
          return (
            <SwiperSlide key={i} className="py-5">
              <Card css={{ w: "100%", h: "200px" }}>
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
                  <Row>
                    <Col>
                      <Text color="#000" size={12}>
                        Available soon.
                      </Text>
                      <Text color="#000" size={12}>
                        Get notified.
                      </Text>
                    </Col>
                    <Col>
                      <Row justify="flex-end">
                        <Button flat auto rounded color="secondary">
                          <Text
                            css={{ color: "inherit" }}
                            size={12}
                            weight="bold"
                            transform="uppercase"
                          >
                            Notify Me
                          </Text>
                        </Button>
                      </Row>
                    </Col>
                  </Row>
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
