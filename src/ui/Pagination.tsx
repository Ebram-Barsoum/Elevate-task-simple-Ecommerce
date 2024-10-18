import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { RiArrowLeftDoubleFill, RiArrowRightDoubleFill } from "react-icons/ri";

interface PaginationProps {
    total: number,
    limit: number,
}

export default function Pagination({ total, limit }: PaginationProps): JSX.Element {
    const [searchParams, setSearchParams] = useSearchParams();
    const current = Number(searchParams.get('page')) || 1;
    const totalPages = Math.ceil(total / limit);

    useEffect(() => {
        if (!searchParams.get('limit') || !searchParams.get('page')) {
            setSearchParams({ page: `1`, limit: `${limit}` });
        }
    }, [searchParams, setSearchParams, limit]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [current]);

    const handlePageChange = (page: number) => {
        setSearchParams({ 'page': `${page}`, 'limit': `${limit}` });
    };

    return (
        <div className="flex items-center justify-center gap-3 my-6">
            <button
                onClick={() => handlePageChange(current - 1)}
                className="flex items-center gap-1 bg-black text-white px-2 py-1 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={current === 1}>
                <RiArrowLeftDoubleFill />
                <span>Prev</span>
            </button>

            <p className="font-bold">
                <span>Page {current}</span> of <span>{totalPages}</span>
            </p>

            <button
                onClick={() => handlePageChange(current + 1)}
                className="flex items-center gap-1 bg-black text-white px-2 py-1 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={current === Math.ceil(total / limit)}
            >
                <span>Next</span>
                <RiArrowRightDoubleFill />
            </button>
        </div>
    )
}
