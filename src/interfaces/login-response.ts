import IUser from "./user";

export default interface LoginResponse{
    user: IUser
    token: string;
}