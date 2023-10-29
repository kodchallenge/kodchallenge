"use client"
import { getBaseUrl } from "@kod/lib/common";
import type { AppRouter } from "@kod/server/trpc/routers";
import { experimental_createActionHook, experimental_createTRPCNextAppDirClient, experimental_serverActionLink } from '@trpc/next/app-dir/client';
import { experimental_nextHttpLink } from '@trpc/next/app-dir/links/nextHttp';
import { loggerLink } from "@trpc/react-query";
import superjson from "superjson";

export const trpc = experimental_createTRPCNextAppDirClient<AppRouter>({
    config() {
        return {
            transformer: superjson,
            links: [
                loggerLink({
                    enabled: (op) => true,
                }),
                experimental_nextHttpLink({
                    batch: true,
                    url: getBaseUrl() + "/api/trpc",
                    headers() {
                        return {
                            'x-trpc-source': 'client',
                        };
                    },
                }),
            ]
        };
    }
});

export const useAction = experimental_createActionHook<AppRouter>({
    links: [loggerLink(), experimental_serverActionLink()],
    transformer: superjson,
});