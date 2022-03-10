import { Outlet } from "react-router";

import Header from "../header/Header";
import { LayoutContainer } from "./Layout.styled";


const Layout = () => {
    return(
        <LayoutContainer>
            <Header/>
            <div>
                <Outlet/>
            </div>
        </LayoutContainer>
    )
}

export default Layout;