import Status from "./status";

export default interface HttpDataResponse<T>{
    status: Status;
    response: T;
}