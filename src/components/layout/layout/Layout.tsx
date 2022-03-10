import { Outlet } from "react-router";

import Header from "../header/Header";


const Layout = () => {
    return(
        <div>
            <Header/>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}

export default Layout;