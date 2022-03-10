import { UserProfilContainer, ImgUserProfil, H5, OnlineStatus } from "./UserProfil.styled"

interface IUser{
    prenom: string;
    nom: string;
    postnom: string
}

const UserProfil = ({ prenom, nom, postnom }: IUser) => {
    return(
        <UserProfilContainer className="d-flex py-2 px-2">
            <div className="me-2 position-relative">
                <ImgUserProfil src="/images/profile.jpg" width="30" height="30" alt="" />
                <OnlineStatus></OnlineStatus>
            </div>
            <H5 className="my-auto">{ prenom + " " + nom + " " + postnom } </H5>
        </UserProfilContainer>
    )
}

export default UserProfil