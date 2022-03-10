import { AiFillHome, AiOutlinePlayCircle } from "react-icons/ai";
import { BsShop, BsMessenger } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdNotifications } from "react-icons/io";
import { CgMenuGridO } from "react-icons/cg";

import { NavLink } from "react-router-dom";

import { 
    HeaderStyled, 
    Ul, 
    Li, 
    Notification, 
    Input, 
    H1,
    Img
} from "./Header.styled";

const Header = () => {


    return(
        <>
        <HeaderStyled className="col-12 d-flex m-0 px-2">
            <div className="col d-flex my-auto">
                <div className="me-3 my-auto">
                    <H1>Social Network</H1>
                </div>

                <Input type="text" placeholder="Rechercher sur ..." className="px-3 py-2" />

            </div>
            <Ul className="col-sm-5 my-0">
                <Li className="col-2 py-3">
                    <NavLink to="/home">
                        <AiFillHome/>
                    </NavLink>
                </Li>
                <Li className="col-2 py-3">
                    <NavLink to="/messanger">
                        <BsMessenger/>
                    </NavLink>
                </Li>
                <Li className="col-2 py-3">
                    <NavLink to="#">
                        <BsShop/>
                    </NavLink>
                </Li>
                <Li className="col-2 py-3">
                    <NavLink to="#">
                        <FaUserCircle/>
                    </NavLink>
                </Li>
            </Ul>
            <div className="col d-flex py-2 justify-content-end">
                <div className="d-flex mx-2">
                    <Img src="/images/profile.jpg" width="30" height="30" className="my-auto me-2" alt="profile" />
                    <h6 className="my-auto">Claude</h6>
                </div>
                <Notification className="p-1 mx-2">
                    <CgMenuGridO/>
                </Notification>
                <Notification className="p-1 mx-2">
                    <AiOutlinePlayCircle/>
                </Notification>
                <Notification className="p-1 mx-2">
                    <IoMdNotifications/>
                </Notification>
                <Notification className="p-1 mx-2">
                    <IoMdArrowDropdown/>
                </Notification>
                
            </div>
        </HeaderStyled>
        <div className="col-12" style={{ height: '60px' }}></div>
        </>
    )

}

export default Header;