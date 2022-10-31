import { Text } from "@nextui-org/react";
import ProductCard from "./ProductCard";

const ProductsHome = () => {
    return (
        <div className="sectionG">
            <Text h1 size={40} b className="mb-10 text-center">Premium Products</Text>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mt-5">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}

export default ProductsHome;