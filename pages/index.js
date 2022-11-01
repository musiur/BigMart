import { Card, Text, useTheme } from "@nextui-org/react";
import SliderHome from "../components/SliderHome";
import ProductsHome from "../components/home/ProductsHome";
import CategoriesSlider from "../components/home/CategoriesSlider";

const Home = () => {
  const { theme } = useTheme();
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
    // "Household",
    // "Meat",
    // "Others",
    // "Seafood",
    // "Snack Foods",
    // "Soft Drinks",
    // "Starchy Foods"
  ];
  return (
    <div className="containerG home__container sectionG">
      <div className="grid grid-cols-12 gap-5">
        <div className="hidden lg:block lg:col-span-3 h-full w-full ">
          <Card
            isBlurred
            css={{ bgBlur: "#ffffff15" }}
            className="p-3 border-0 h-full border-[1px] border-[#00000015]"
          >
            <Text className="mb-5 pl-3 text-xl lg:text-2xl" b>
              Categories
            </Text>
            <div className="flex flex-col">
              {
                categoriesArray.map((item, i) => {
                  return (
                    <Text key={i} className="cursor-pointer px-3 py-1 rounded-lg hover:font-medium" css={{'&:hover': {
                      background: '$primaryLight',
                      color: "$primary",
                    },}}>{item}</Text>
                  )
                })
              }
            </div>
          </Card>
        </div>
        <div className="col-span-12 lg:col-span-9 h-full w-full">
          <SliderHome />
        </div>
      </div>
      <CategoriesSlider />
      <ProductsHome />
      <ProductsHome />
      
    </div>
  );
};

export default Home;
