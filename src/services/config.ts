import { getSession } from "next-auth/react";

export const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

// Create get, post, put, delete functions for each resource
export class KcFetch {
    token: string;
    constructor(token?: string) {
        this.token = token ?? "";
    }

    async get<T>(url: string) {
        const response = await fetch(`${BASE_API_URL}/${url}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + this.token
            }
        });
        return await response.json() as T;
    }

    async post<T = any>(url: string, body: any): Promise<T> {
        const response = await fetch(`${BASE_API_URL}/${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + this.token
            },
            body: JSON.stringify(body)
        });
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        return await response.json();
    }

    async put(url: string, body: any) {
        const response = await fetch(`${BASE_API_URL}/${url}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + this.token
            },
            body: JSON.stringify(body)
        });
        return await response.json();
    }
    async delete(url: string) {
        const response = await fetch(`${BASE_API_URL}/${url}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + this.token
            }
        });
        return await response.json();
    }

    async auth() {
        const session = await getSession();
        const token = session?.user?.token;

        return new KcFetch(token);
    }
}

export const api = new KcFetch();