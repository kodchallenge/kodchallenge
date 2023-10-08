export type KodAuthValues = {
    user: {
        id: number
        username: string
        email: string
        avatar: string
    } | undefined | null;
    isAuthenticated: boolean;
    loading: boolean;
}