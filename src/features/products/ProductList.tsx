import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import { getProducts } from "../../services/apiProducts";

import ErrorMessage from "../../ui/ErrorMessage";
import Loader from "../../ui/Loader";
import Pagination from "../../ui/Pagination";
import ProductCard from "../../ui/ProductCard";


export default function ProductList(): JSX.Element {
    const { data: products, isError, isLoading, error } = useQuery({ queryKey: ['products'], queryFn: getProducts });
    const [searchParams] = useSearchParams();
    const current = Number(searchParams.get('page')) || 1;
    const limit = Number(searchParams.get('limit')) || 10;

    if (isLoading) return <Loader />;
    if (isError) return <ErrorMessage message={error.message || 'Something went wrong'} />;

    const displayedProducts = products?.slice((current - 1) * 10, current * 10);

    return (
        <div >
            <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {displayedProducts?.map(product => (
                    <ProductCard key={product.id} img={product.image} title={product.title} price={product.price} rate={product.rating.rate} description={product.description} />
                ))}
            </div>

            {products?.length === 0 && <p>No products found 👋</p>}

            {(products?.length || 0) > limit && <Pagination total={products?.length || 0} limit={limit} />}
        </div>
    )
}
