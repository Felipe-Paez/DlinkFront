export interface User {
    _id?: string;
    name?: string;          // ? Opcional
    email: string;
    password: string;
    number?:number;
    role?: string;           // ? Opcional
}
