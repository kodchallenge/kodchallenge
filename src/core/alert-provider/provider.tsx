"use client"
import React, { PropsWithChildren, useCallback, useMemo, useReducer } from 'react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import KcAlertContext from './context';
import { KcAlertMethods } from './type';
import reducer, { initialState } from './reducer';

const KcAlertProvider = ({ children }: PropsWithChildren) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const kcAlert: KcAlertMethods = useMemo(() => ({
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
        <KcAlertContext.Provider value={kcAlert}>
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
        </KcAlertContext.Provider>
    )
}

export default KcAlertProvider