import { Link } from "react-router-dom"
import { ButtonLogin, FootLogin, InputLogin, Label, Logo, TitleLogin } from "../login/Login.styled"
import { RegisterContainer, FormRegister } from "./Register.styled"

const Register = () => {
    return(
        <RegisterContainer className="col-12">
            <FormRegister className="m-auto px-5 py-5" style={{ width: "50%" }}>
                <div>
                    <Logo className="mb-4">Social Network</Logo>
                </div>
                <TitleLogin className="mb-3">Inscrivez vous</TitleLogin>

                <div className="d-flex my-3">
                    <div className="col me-3">
                        <Label htmlFor="">Prénom <span className="text-danger">*</span> </Label>
                        <div>
                            <InputLogin type="text" className="col-12 ps-2" placeholder="Entrer le prénom" />
                        </div>
                    </div>
                    <div className="col">
                        <Label htmlFor="">Nom <span className="text-danger">*</span></Label>
                        <div>
                            <InputLogin type="text" className="col-12 ps-2" placeholder="Entrer le nom" />
                        </div>
                    </div>
                </div>
                <div className="d-flex my-3">
                    <div className="col me-3">
                        <Label htmlFor="">Nom d'utilisateur <span className="text-danger">*</span></Label>
                        <div>
                            <InputLogin type="text" className="col-12 ps-2" placeholder="Entrer le nom d'utlisateur" />
                        </div>
                    </div>
                    <div className="col">
                        <Label htmlFor="">E-mail <span className="text-danger">*</span></Label>
                        <div>
                            <InputLogin type="email" className="col-12 ps-2" placeholder="Entrer l'adresse mail" />
                        </div>
                    </div>
                </div>

                <div className="d-flex my-3">
                    <div className="col me-3">
                        <Label htmlFor="">Mot de passe <span className="text-danger">*</span></Label>
                        <div>
                            <InputLogin type="password" className="col-12 ps-2" placeholder="Entrer le nom mot de passe" />
                        </div>
                    </div>
                    <div className="col">
                        <Label htmlFor="">Confirmer le mot de passe <span className="text-danger">*</span></Label>
                        <div>
                            <InputLogin type="password" className="col-12 ps-2" placeholder="Entrer la confirmation" />
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-end mt-4">
                    <ButtonLogin className="col-3 px-3 py-2">S'inscrire</ButtonLogin>
                </div>

                <FootLogin className="text-center">
                    Vous avez un compte, 
                    <Link to="/">
                         Se connecter
                    </Link>
                </FootLogin>
                
            </FormRegister>
        </RegisterContainer>
    )
}

export default Register