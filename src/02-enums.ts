export enum ROLES {
    ADMIN = 'admin',
    SELLER = 'seller',
    CUSTOMER = 'customer',
}

export type User = {
    username: string;
    role: ROLES;
}

const sofiUser : User = {
    username: 'sofih-ii',
    role: ROLES.ADMIN
}