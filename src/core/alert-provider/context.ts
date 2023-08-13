"use client"
import { createContext } from 'react';
import { KcAlertMethods } from './type';

const KcAlertContext = createContext<KcAlertMethods | null>(null);

export default KcAlertContext;