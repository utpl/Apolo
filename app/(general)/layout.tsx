import {Navbar} from "@/components";
import { type ReactNode } from "react";

export default function GeneralLayout({ children }: { children: ReactNode }) {
    return (
        <>

        <Navbar />
        <main className="flex flex-col items-center  mt-24 w-full">
            <h1>Apolo</h1>
            {children}
        </main>
        </>
    )
}