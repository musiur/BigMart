import { Card, Col, Row, Button, Text } from "@nextui-org/react";

export const ProductCard = () => (
  <Card css={{ w: "100%", border: "0" }} className="max-h-[350px] min-h-[150px]">
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
        bottom: 0,
        zIndex: 1,
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-1 w-full">
        <div>Comming Soon</div>
      <Button flat auto rounded color="primary">
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                Notify Me
              </Text>
            </Button>
      </div>
    </Card.Footer>
  </Card>
);

export default ProductCard;
