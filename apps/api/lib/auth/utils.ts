import { hash } from 'bcryptjs';

export const hashPassword = async (pwd: string) => {
    return hash(pwd, 12)
}