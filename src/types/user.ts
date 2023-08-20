export interface User {
    id: number;
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    isVerified: boolean;
    isDeleted: boolean;
    createdAt: string;
    deletedAt: string;
    verifiedAt: string;
    avatar: string;
    biography: string;
    location: string;
    website: string;
    github: string;
    linkedin: string;
    twitter: string;
    token: string;
}