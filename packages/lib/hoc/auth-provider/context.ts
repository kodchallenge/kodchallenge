"use client"
import { createContext } from 'react'
import { KodAuthValues } from './type'

const initialContextState: KodAuthValues = {
    user: null,
    isAuthenticated: false,
    loading: false
}

const KodAuthContext = createContext<KodAuthValues>(initialContextState)

export default KodAuthContext