export interface KcAlertMethods {
    alert: (title?: string, message?: string, buttons?: KcAlertButton[]) => void;
}

export interface KcAlertButton {
    text: string;
    className?: string;
    disableHideAlert?: boolean;
    onClick?: () => void;
}

export interface KcAlertState {
    open: boolean;
    title?: string;
    message?: string;
    buttons?: KcAlertButton[];
}

// TODO: Add promp and dismiss types
type KcAlertType = 'ALERT' | 'DISMISS';

export interface KcAlertAction {
    type: KcAlertType;
    payload: Partial<KcAlertState>;
}