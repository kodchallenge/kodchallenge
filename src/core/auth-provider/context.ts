"use client"
import { createContext } from "react";
import { AuthValuesType } from "./type";

// ** Defaults
export const defaultAuthProvider: AuthValuesType = {
    user: null,
    loading: true,
    setLoading: () => Boolean,
    login: () => Promise.resolve(),
    logout: () => Promise.resolve()
}

const KcAuthContext = createContext<AuthValuesType>(defaultAuthProvider)

export default KcAuthContext;