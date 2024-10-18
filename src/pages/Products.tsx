import ProductList from "../features/products/ProductList";

export default function Products(): JSX.Element {
    return (
        <div className="flex flex-col gap-6 p-4 text-center  sm:w-[90%] sm:mx-auto">
            <h1 className="text-start text-xl font-bold text-green-800">Our Products</h1>

            <ProductList />
        </div>
    )
}
