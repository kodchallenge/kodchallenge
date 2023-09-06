"use client";
import { KcAlertProvider } from '@/core/alert-provider';
import { KcAuthProvider } from '@/core/auth-provider';
import { ThemeProvider } from '@/themes/ThemeProvider';
import { SessionProvider } from 'next-auth/react';
import React, { PropsWithChildren } from 'react'

const KcProviders = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <KcAlertProvider>
        <SessionProvider>
          <KcAuthProvider>
            {children}
          </KcAuthProvider>
        </SessionProvider>
      </KcAlertProvider>
    </ThemeProvider>
  )
}

export default KcProviders