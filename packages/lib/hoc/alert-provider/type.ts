export interface KodAlertMethods {
    alert: (title?: string, message?: string, buttons?: KodAlertButton[]) => void;
}

export interface KodAlertButton {
    text: string;
    className?: string;
    disableHideAlert?: boolean;
    onClick?: () => void;
}

export interface KodAlertState {
    open: boolean;
    title?: string;
    message?: string;
    buttons?: KodAlertButton[];
}

// TODO: Add promp and dismiss types
type KodAlertType = 'ALERT' | 'DISMISS';

export interface KodAlertAction {
    type: KodAlertType;
    payload: Partial<KodAlertState>;
}