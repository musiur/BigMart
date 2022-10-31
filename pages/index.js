import { useTheme } from "@nextui-org/react";
import SliderHome from "../components/SliderHome";
import ProductsHome from "../components/home/ProductsHome";
import CategoriesSlider from "../components/home/CategoriesSlider";

const Home = () => {
  const { theme } = useTheme();
  return (
    <div className="containerG home__container sectionG">
      <SliderHome />
      <ProductsHome />
      <ProductsHome />
      <ProductsHome />
      <ProductsHome />
      <CategoriesSlider />
    </div>
  );
};

export default Home;
