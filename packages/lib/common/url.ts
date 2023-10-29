export const getBaseUrl = () => {
    if (typeof window !== 'undefined') return '';
    if (process.env.NODE_ENV == "development") return 'http://localhost:3000';

    return `https://${process.env.BASE_URL}`;
}