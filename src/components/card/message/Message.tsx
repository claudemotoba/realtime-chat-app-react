import { MessageContainer, P, ImgMessage, Time } from "./Message.styled"

interface IMessage{
    own: boolean
}

const Message = ({ own }: IMessage) => {
    return(
        <MessageContainer className={own == true ? "d-flex my-2" : "d-flex my-2 justify-content-end"}>
            {
                own ? 
                (
                    <div className="my me-3">
                        <ImgMessage src="/images/profile.jpg" width="38" height="38" alt="" />
                    </div>
                ): (<></>)
            }
            <div>
                <P className={own == true ? "px-3 py-2 mb-1 owner" : "px-3 py-2 mb-1 not-owner"}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro libero eveniet et doloremque, nobis odit esse quam aperiam alias aspernatur nisi recusandae numquam, distinctio ab. Illum magni amet enim ducimus?
                </P>
                <Time className="mb-2">
                    Il y 1h
                </Time>
            </div>
        </MessageContainer>
    )
}

export default Message