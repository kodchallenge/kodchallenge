export const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

// Create get, post, put, delete functions for each resource
export const api = {
    get: async (url: string) => {
        const response = await fetch(`${BASE_API_URL}/${url}`);
        return await response.json();
    },
    post: async <T = any>(url: string, body: any): Promise<T> => {
        const response = await fetch(`${BASE_API_URL}/${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        return await response.json();
    },
    put: async (url: string, body: any) => {
        const response = await fetch(`${BASE_API_URL}/${url}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
        return await response.json();
    },
    delete: async (url: string) => {
        const response = await fetch(`${BASE_API_URL}/${url}`, {
            method: "DELETE"
        });
        return await response.json();
    },

    // TODO: Add interceptors for each resource
}