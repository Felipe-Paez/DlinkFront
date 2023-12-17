export interface User {
    _id?: string;
    username:string;
    name?: string;          // ? Opcional
    lastname?:string;
    email: string;
    password: string;
    role?: string;           // ? Opcional
}
