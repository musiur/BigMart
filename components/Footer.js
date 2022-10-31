import { Card, Col, Row, Button, Text } from "@nextui-org/react";

const Footer = () => {
  return (
    <div className="">
      <Card css={{ w: "100%", h: "200px" }}>
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
            borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
            top: 0,
            bottom:0,
            zIndex: 1,
          }}
        >
          <div className="containerG sectionG">
            adfadfa
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Footer;
