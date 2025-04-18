export interface UserRegister{
        "username": string
        "password": string
        "roles": string
}

export interface UserLogin{
    "username": string
    "password": string
}

export type LoginResponse={
    token: string;
}