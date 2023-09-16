"use client"
import { createContext } from 'react';
import { KodAlertMethods } from './type';

const KodAlertContext = createContext<KodAlertMethods | null>(null);

export default KodAlertContext;