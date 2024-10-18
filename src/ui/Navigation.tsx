import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

import { NavigationLink } from "../services/constant";

const links: NavigationLink[] = [
    {
        name: "Home",
        path: "/Elevate-task-simple-Ecommerce"
    },
    {
        name: "Products",
        path: "/Elevate-task-simple-Ecommerce/products/"
    },
    {
        name: "About",
        path: "/Elevate-task-simple-Ecommerce/about/"
    },
    {
        name: "Contact",
        path: "/Elevate-task-simple-Ecommerce/contact/"
    },
]

export default function Navigation(): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <div>
            <button className="z-0 sm:hidden" onClick={() => setIsOpen(true)}>
                <RxHamburgerMenu className="text-xl" />
            </button>

            <ul className={`flex px-2 flex-col h-screen fixed right-0 top-0 z-10 w-[16rem] border-l ${isOpen ? 'translate-x-0' : 'translate-x-[100%]'} bg-white sm:static sm:translate-x-0 sm:border-l-0 sm:h-auto sm:flex-row gap-4 items-center transition-transform duration-500`}>
                <li className="my-4 p-2 self-end sm:hidden">
                    <button onClick={() => setIsOpen(false)}>
                        <AiOutlineClose className="text-xl" />
                    </button>
                </li>
                {
                    links.map((link) => (
                        <li key={link.path} className="text-center font-bold ">
                            <Link to={link.path} className={`${pathname === link.path ? 'active' : ''}`}>{link.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
