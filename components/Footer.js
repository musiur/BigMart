import { Card, Input, Link, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import ButtonG from "../components/ButtonG";

const Footer = () => {
  const router = useRouter();
  const footerContents = [
    {
      heading: "Company",
      childrens: [
        {
          text: "About",
          link: "",
        },
        {
          text: "Blog",
          link: "",
        },
        {
          text: "Legal",
          link: "",
        },
        {
          text: "Partners",
          link: "",
        },
        {
          text: "Privacy",
          link: "",
        },
      ],
    },
    {
      heading: "Support",
      childrens: [
        {
          text: "About",
          link: "",
        },
        {
          text: "Blog",
          link: "",
        },
        {
          text: "Legal",
          link: "",
        },
        {
          text: "Partners",
          link: "",
        },
        {
          text: "Privacy",
          link: "",
        },
      ],
    },
    {
      heading: "Solution",
      childrens: [
        {
          text: "About",
          link: "",
        },
        {
          text: "Blog",
          link: "",
        },
        {
          text: "Legal",
          link: "",
        },
        {
          text: "Partners",
          link: "",
        },
        {
          text: "Privacy",
          link: "",
        },
      ],
    },
    {
      heading: "Legal",
      childrens: [
        {
          text: "About",
          link: "",
        },
        {
          text: "Blog",
          link: "",
        },
        {
          text: "Legal",
          link: "",
        },
        {
          text: "Partners",
          link: "",
        },
        {
          text: "Privacy",
          link: "",
        },
      ],
    },
  ];
  return (
    <div
      className="containerG sectionG grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 w-full"
      style={{
        background: "url(../static/images/backgrounds/tailwindtop.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      {footerContents.map((item, i) => {
        const { heading, childrens } = item;
        return (
          <div key={i}>
            <h4 className="font-semibold text-xl lg:text-2xl">{heading}</h4>
            <div>
              {childrens.map((child, i) => {
                const { text, link } = child;
                return (
                  <Text
                    key={i}
                    className="py-1 hover:text-blue-600 cursor-pointer"
                    onClick={() => router.push(link ? link : "#")}
                  >
                    {text}
                  </Text>
                );
              })}
            </div>
          </div>
        );
      })}
      <div className="w-full h-full">
        <h4 className="font-semibold text-xl lg:text-2xl mb-5">
          Subscribe to our newslater
        </h4>
        <p className="mb-5">
          Eiusmod nulla anim labore amet mollit deserunt labore amet mollit
          deserunt.
        </p>
        <Input className="mb-2 border border-gray-600" css={{width: "100%"}}/>
        <ButtonG text="Subscribe" color="primary"/>
      </div>
    </div>
  );
};

export default Footer;
