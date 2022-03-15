import axios from '../../api/axios'
import HttpDataResponse from '../../interfaces/http-data-response';
import LoginResponse from '../../interfaces/login-response';

import IUserLogin from '../../interfaces/user-login'
import { AUTH_ERROR, AUTH_USER } from '../types/auth.type';

export const login = (user: IUserLogin, callback: any) => {
    return async (dispatch: any) => {
        try {
            const { data } : { data: HttpDataResponse<LoginResponse> } = await axios.post("/users/login", user);
            
            console.log("await", data);
            
            if(data.status.code == 400){
                dispatch({
                    type: AUTH_ERROR,
                    payload: data.status.description,
                })
            }else{
                dispatch({
                    type: AUTH_USER,
                    payload: data.response.token
                })
    
                sessionStorage.setItem("token", data.response.token);
                sessionStorage.setItem("user", JSON.stringify(data.response.user));
            }

            callback();
        } catch (error: any) {
            console.log("error", error);

            dispatch({
                type: AUTH_ERROR,
                payload: 'Erreur inconnue survenue, veuillez contacter le support',
            })
        }
    }
}