import { httpBatchLink } from "@trpc/react-query";

const getBaseUrl = () => {
    if (typeof window !== "undefined") return "";
    return `http://localhost:${process.env.PORT ?? 3000}`;
};

export const createLink = () =>
    httpBatchLink({ url: `${getBaseUrl()}/api/trpc` });