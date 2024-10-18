import Rate from "./Rate"

interface ProductCardProps {
    img: string,
    title: string,
    price: number,
    rate: number,
    description: string
}

export default function ProductCard({ img, title, price, rate, description }: ProductCardProps): JSX.Element {
    return (
        <div className="flex flex-col justify-between bg-white border rounded-md ">
            <div className="h-[10rem] p-2 overflow-hidden">
                <img src={img} alt={description} loading="lazy" className="h-full mx-auto hover:scale-110 transition-all duration-300" />
            </div>

            <div className="text-start p-3">
                <h3 className="text-green-800 my-2">{title}</h3>
                <p className="text-sm">Price: {price} $</p>
                <Rate rate={rate} />
            </div>
        </div>
    )
}
