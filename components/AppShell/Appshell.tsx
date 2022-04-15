import {ReactNode} from "react";
import Header from "./Header";
import Navbar from "./Navbar";

export default function AppShell({children}: { children: ReactNode }) {
    return (
        <>
            <Navbar>
                {children}
            </Navbar>
        </>
    )
}