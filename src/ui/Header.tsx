import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header(): JSX.Element {
    return (
        <div className="flex justify-between items-center p-4 bg-white border-b sm:w-[90%] sm:mx-auto">
            <Logo />

            <Navigation />
        </div>
    )
}
