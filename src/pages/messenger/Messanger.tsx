import { useState } from "react";
import { BsSearch, BsThreeDots } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { IoMdImages, IoMdSend } from "react-icons/io";

import { ActifMessage, ButtonSend, ContainerMessanger, ContainerSendMessage, ImgProfil, TextMessage, TitleActifMessage } from "./Messanger.styled"
import { Input, H5 } from "./Messanger.styled";
import UserProfil from "../../components/card/profil-user/UserProfil";

import IUser from "../../interfaces/user";
import Message from "../../components/card/message/Message";
import { AiFillPlusCircle, AiOutlineGif } from "react-icons/ai";


const Messanger = () => {

    const [isVisible, setIsVisible] = useState(false);
    const users = [
        {
            id: 1,
            prenom: "Claude",
            nom: "Motoba",
            postnom: "",
            url: ""
        },
        {
            id: 2,
            prenom: "Ruben",
            nom: "Panga",
            postnom: "Panga",
            url: ""
        },
        {
            id: 3,
            prenom: "Christian",
            nom: "Nyembue",
            postnom: "Wa soleil",
            url: ""
        },
        {
            id: 4,
            prenom: "Kevine",
            nom: "Motoba",
            postnom: "",
            url: ""
        },
        {
            id: 5,
            prenom: "Mike",
            nom: "Mbongo",
            postnom: "",
            url: ""
        },
        {
            id: 6,
            prenom: "Christian",
            nom: "Togba",
            postnom: "",
            url: ""
        },
        {
            id: 7,
            prenom: "Claude",
            nom: "Motoba",
            postnom: "",
            url: ""
        },
        {
            id: 8,
            prenom: "Ruben",
            nom: "Panga",
            postnom: "Panga",
            url: ""
        },
        {
            id: 9,
            prenom: "Christian",
            nom: "Nyembue",
            postnom: "Wa soleil",
            url: ""
        },
        {
            id: 10,
            prenom: "Kevine",
            nom: "Motoba",
            postnom: "",
            url: ""
        },
        {
            id: 11,
            prenom: "Mike",
            nom: "Mbongo",
            postnom: "",
            url: ""
        },
        {
            id: 12,
            prenom: "Christian",
            nom: "Togba",
            postnom: "",
            url: ""
        },
        {
            id: 13,
            prenom: "Claude",
            nom: "Motoba",
            postnom: "",
            url: ""
        },
        {
            id: 14,
            prenom: "Ruben",
            nom: "Panga",
            postnom: "Panga",
            url: ""
        },
        {
            id: 15,
            prenom: "Christian",
            nom: "Nyembue",
            postnom: "Wa soleil",
            url: ""
        },
    ]

    return(
        <ContainerMessanger className="col-12 d-flex pe-4 mt-4">
            <div className="col me-3 px-3">
                
                <div className="d-flex justify-content-between my-2">
                    <div className="my-auto">
                        <H5 className="mb-0">Contacts</H5>
                    </div>
                    <div className="d-flex">
                        <div className="me-3">
                            {
                                isVisible == true ? <Input type="search" className="px-3 py-1" placeholder="Rechercher unn contact" />  : <span></span>
                            }
                            <BsSearch className="pointer" onClick={() => setIsVisible(!isVisible)} />
                            
                        </div>
                        <div className="my-auto">
                            
                            <BsThreeDots/>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="">
                    {
                        users.map((user: any) => (
                            <UserProfil
                                key={user.id}
                                prenom={user.prenom}
                                nom={user.nom}
                                postnom={user.postnom}
                                
                            />
                        ))
                    }
                </div>
            </div>
            <div className="col-6 me-3">
                <ActifMessage className="col-sm-6 d-flex justify-content-between mb-3 px-3 py-3">
                    <div className="d-flex">
                        <div className="my-auto me-3">
                            <ImgProfil src="/images/profile.jpg" width="38" height="38" alt="" />
                        </div>
                        <div>
                            <TitleActifMessage className="mb-0">Ben Makengo</TitleActifMessage>
                            <p className="mb-0" style={{ color: '#65676B' }}>En ligne il y a 22h</p>
                        </div>
                    </div>
                    <div className="my-auto">
                        <ImCross/>
                    </div>
                </ActifMessage>
                <div className="col-12" style={{ height: '85px' }}></div>

                <div className="px-4">
                    <Message own={true} />
                    <Message own={false}/>
                    <Message own={true}/>
                    <Message own={false}/>
                </div>
                <ContainerSendMessage className="col-12 d-flex px-4 bg-white py-3">
                    <div className="col-3 my-auto">
                        <ButtonSend className="p-2 me-3">
                            <IoMdImages/>
                        </ButtonSend>

                        <ButtonSend className="p-2 me-3">
                            <AiOutlineGif/>
                        </ButtonSend>

                        <ButtonSend className="p-2">
                            <AiFillPlusCircle/>
                        </ButtonSend>
                    </div>
                    <TextMessage name="" id="" rows={2} className="col-8 px-3 py-2 me-3" placeholder="Ecrivez un message..."></TextMessage>
                    <div className="my-auto">
                        <ButtonSend className="p-2">
                            <IoMdSend/>
                        </ButtonSend>
                    </div>
                </ContainerSendMessage>
            </div>
            <div className="col">
                    Hello
            </div>
        </ContainerMessanger>
    )
}

export default Messanger