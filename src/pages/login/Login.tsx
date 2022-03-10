import { Link } from "react-router-dom";
import { RiLockPasswordLine } from 'react-icons/ri';
import { BiUser } from "react-icons/bi";

import { 
    LoginContainer, 
    FormLogin, 
    Label, 
    TitleLogin, 
    ButtonLogin, 
    InputLogin, 
    Logo, 
    Description,
    FootLogin,
    IConFloat
} from "./Login.styled";

const Login = () => {
    return(
        <LoginContainer className="col-12">
            <FormLogin className="m-auto px-5 py-5" style={{ width: "30%" }}>

                <div>
                    <Logo className="mb-4">Social Network</Logo>
                </div>
                <TitleLogin className="mb-3">Connectez vous</TitleLogin>

                <Description className="mt-2 mb-0">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus inventore
                </Description>

                <div className="col-12 my-4">
                    <Label htmlFor="" className="mb-2">Nom d'utilisateur</Label> 
                    <div className="position-relative">
                        <IConFloat className="position-absolute">
                            <BiUser/>
                        </IConFloat>
                        <InputLogin type="text" className="col-12 ps-4" placeholder="Entrer votre nom d'utilisateur" />
                    </div>
                </div>
                <div className="col-12 my-4">
                    <Label htmlFor="" className="mb-2">Mot de passe</Label>
                    <div className="position-relative">
                        <IConFloat className="position-absolute">
                            <RiLockPasswordLine/>
                        </IConFloat>
                        <InputLogin type="text" className="col-12 ps-4" placeholder="Entrer le mot de passe" />
                    </div>
                </div>

                <div className="d-flex justify-content-between my-4">
                    <div>
                        <input type="checkbox" className="me-2" />
                        <label htmlFor="" style={{ fontSize: "12px" }}>Remember Me</label>
                    </div>
                    <div>
                        <span>Mot de passe oublie ?</span>
                    </div>
                </div>

                <div className="col-12 mt-3">
                    <ButtonLogin className="col-12 px-3 py-2">Se connecter</ButtonLogin>
                </div>

                <FootLogin className="text-center my-3">
                    Vous n'avez de compte,  
                    <Link to="/register">
                         S'inscrire
                    </Link>
                </FootLogin>
            </FormLogin>
        </LoginContainer>
    )
}

export default Login;