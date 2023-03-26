export interface User {
    id: number;
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    avatar: string;
    biography?: string | null;
    website?: string | null;
    location?: string | null;
    github?: string | null;
    twitter?: string | null;
    linkedin?: string | null;
}