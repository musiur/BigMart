import { Card } from "@nextui-org/react";
import BackgroundImage from "../static/images/backgrounds/tailwindtop.png";

const Footer = () => {
  return (
    <div className="">
      <Card css={{ w: "100%", h: "200px", border: "0", borderRadius: "10px 10px 0 0" }}>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src={BackgroundImage.src}
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
            bgBlur: "#ffffff00",
            top: 0,
            bottom:0,
            zIndex: 1,
            borderRadius: "10px 10px 0 0"
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
