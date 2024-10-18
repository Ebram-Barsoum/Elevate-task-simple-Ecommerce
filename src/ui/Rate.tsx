import { FaRegStar, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

interface RateProps {
    rate: number,
    max?: number,
}

export default function Rate({ rate, max = 5 }: RateProps): JSX.Element {
    return (
        <p className="flex items-center gap-2 text-sm">
            Rating:
            <p className="flex items-center gap-1">
                {
                    Array(Math.floor(rate)).fill(0).map((_, i) => (
                        <FaStar key={i} className="text-yellow-500" />
                    ))
                }
                {
                    Math.ceil(rate) !== rate && <FaRegStarHalfStroke className="text-yellow-400" />
                }
                {
                    Array(max - Math.ceil(rate)).fill(0).map((_, i) => (
                        <FaRegStar key={i} className="text-gray-400" />
                    ))
                }
            </p>
            <span>
                {rate}
            </span>
        </p>
    )
}
