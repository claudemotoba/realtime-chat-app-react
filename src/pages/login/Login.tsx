import { Link } from "react-router-dom";
import { RiLockPasswordLine } from 'react-icons/ri';
import { BiUser } from "react-icons/bi";
import { useSelector, useDispatch, DefaultRootState } from "react-redux";

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
import { login } from '../../redux/actions/auth.action'
import { useForm } from "react-hook-form";
import IUserLogin from "../../interfaces/user-login";
import { RootState } from "../../redux/reducers/index.reducer";


const Login = () => {

    const { authReducer: { user, loading, errorMessage } } = useSelector((state: RootState) => state);
    const dispatch = useDispatch();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data: any | IUserLogin) => {
        
        dispatch(
            login(data, () => {
              
            })
        );
        console.log(data)
        console.log("user", user)
        console.log("loading", loading)
        console.log("message", errorMessage)
    };

    return(
        <LoginContainer className="col-12">
            <FormLogin onSubmit={handleSubmit(onSubmit)} className="m-auto px-5 py-5" style={{ width: "30%" }}>

                <div>
                    <Logo className="mb-4">Social Network</Logo>
                </div>
                <TitleLogin className="mb-3">Connectez vous</TitleLogin>

                <Description className="mt-2 mb-0">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus inventore
                </Description>

                <div className="col-12 my-4">
                    <Label htmlFor="" className="mb-2">E-mail</Label> 
                    <div className="position-relative">
                        <IConFloat className="position-absolute">
                            <BiUser/>
                        </IConFloat>
                        <InputLogin 
                            type="email"
                            className="col-12 ps-4" 
                            placeholder="Entrer votre email" 
                            // {...register("email", { required: true })}
                            {...register("email", {
                                required: "L'adresse email est obligatoire",
                                pattern: {
                                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                  message: "L'adresse email n'est pas valide",
                                },
                            })}
                        />
                        <br />
                        {errors.email && (
                            <span style={{ color: "red" }}>{errors.email.message}</span>
                        )}
                    </div>
                </div>
                <div className="col-12 my-4">
                    <Label htmlFor="" className="mb-2">Mot de passe</Label>
                    <div className="position-relative">
                        <IConFloat className="position-absolute">
                            <RiLockPasswordLine/>
                        </IConFloat>
                        <InputLogin 
                            type="password" 
                            className="col-12 ps-4" 
                            placeholder="Entrer le mot de passe" 
                            {...register("password", {
                                required: "Le mot de passe est obligatoire",
                                // pattern: {
                                //   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                //   message: "Le mot de passe email n'est pas valide",
                                // },
                            })}
                        />
                        <br />
                        {errors.password && (
                            <span style={{ color: "red" }}>{errors.password.message}</span>
                        )}
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
                    <ButtonLogin type="submit" className="col-12 px-3 py-2">Se connecter</ButtonLogin>
                </div>
                <div className="text-center text-danger my-2">
                    <span>{ errorMessage }</span>
                </div>
                <FootLogin className="text-center my-1">
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