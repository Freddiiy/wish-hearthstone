import {ReactNode} from "react";
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