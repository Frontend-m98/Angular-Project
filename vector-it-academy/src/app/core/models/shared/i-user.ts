import { Roles } from "./roles";

export interface IUser {
    uid: string;
    username: string;
    first_name: string;
    last_name: string;
    signing_date: Date;
    role: Roles[];
    email?: string;
    password?: string;
}