"use client"
import React, { PropsWithChildren, useCallback, useMemo, useReducer } from 'react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@kod/ui';
import KodAlertContext from './context';
import { KodAlertMethods } from './type';
import reducer, { initialState } from './reducer';

const KodAlertProvider = ({ children }: PropsWithChildren) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const KodAlert: KodAlertMethods = useMemo(() => ({
        alert: (title, message, buttons) => {
            dispatch({
                type: "ALERT",
                payload: {
                    title,
                    message,
                    buttons,
                    open: true,
                }
            })
        }
    }), [])

    const dismiss = useCallback(() => dispatch({ type: 'DISMISS', payload: {} }), []);

    return (
        <KodAlertContext.Provider value={KodAlert}>
            {children}
            <AlertDialog
                open={state.open}
            >
                <AlertDialogContent>
                    <AlertDialogHeader>
                        {!!state.title && <AlertDialogTitle>{state.title}</AlertDialogTitle>}
                        {!!state.message && <AlertDialogDescription>{state.message}</AlertDialogDescription>}
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={dismiss}>İptal</AlertDialogCancel>
                        {!!state.buttons?.length && (
                            state.buttons.map((button, i) => (
                                <AlertDialogAction
                                    className={button.className}
                                    onClick={() => {
                                        button.onClick?.()
                                        !button.disableHideAlert && dismiss()
                                    }}
                                >
                                    {button.text}
                                </AlertDialogAction>
                            ))
                        )}
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </KodAlertContext.Provider>
    )
}

export default KodAlertProvider