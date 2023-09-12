"use client"
import { createTRPCReact } from "@trpc/react-query";
import { type AppRouter } from "@kod/server/trpc/routers/index";

export const trpc = createTRPCReact<AppRouter>({});