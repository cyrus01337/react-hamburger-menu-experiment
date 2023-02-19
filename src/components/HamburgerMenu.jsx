import Link from "next/link";
import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import {
    RxCross2 as CloseMenuIcon,
    RxHamburgerMenu as OpenMenuIcon,
} from "react-icons/rx";

export default function HamburgerMenu() {
    const iconSizeClassName = "h-8 w-8";
    const hamburgerMenuIconClassName = `justify-self-end hover:cursor-pointer ${iconSizeClassName}`;
    const closeMenuIconClassName = `ml-auto mb-2 hover:cursor-pointer ${iconSizeClassName}`;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <OpenMenuIcon
                className={hamburgerMenuIconClassName}
                onClick={() => setIsMenuOpen(true)}
            />

            <div className="absolute left-0 top-0">
                <Menu
                    className="bg-white p-3 shadow-md"
                    isOpen={isMenuOpen}
                    itemListClassName="flex flex-col"
                    onClose={() => setIsMenuOpen(false)}
                    disableAutoFocus
                    right
                >
                    <CloseMenuIcon
                        className={closeMenuIconClassName}
                        onClick={() => setIsMenuOpen(false)}
                    />

                    <Link href="/foo">Foo</Link>
                    <Link href="/bar">Bar</Link>
                    <Link href="/baz">Baz</Link>
                    <Link href="/quo">Quo</Link>
                </Menu>
            </div>
        </>
    );
}
