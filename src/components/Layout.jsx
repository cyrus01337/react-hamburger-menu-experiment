import { capitalize as capitalise } from "lodash";
import Head from "next/head";
import { useRouter } from "next/router";

import { HamburgerMenu } from "@/components";

function Navbar() {
    return (
        <div className="box-border grid items-center px-6 py-4 shadow-md">
            <HamburgerMenu />
        </div>
    );
}

function Home({ className, children, title }) {
    const { pathname } = useRouter();
    title ??= pathname === "/" ? "Home" : capitalise(pathname.slice(1));

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <div className={className}>
                <Navbar />

                <main className="box-border p-4">{children}</main>
            </div>
        </>
    );
}

export default {
    Home,
};
