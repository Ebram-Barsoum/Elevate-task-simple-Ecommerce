import { BiError } from "react-icons/bi";

interface ErrorMessageProps {
    message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps): JSX.Element {
    return (
        <p className="flex gap-3 p-4 bg-red-100 text-red-900 rounded-md w-fit mx-auto">
            <BiError className="text-2xl" />
            <span>
                {message}
            </span>
        </p>
    )
}
