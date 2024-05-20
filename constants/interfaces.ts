
export interface CardInterface {
    number: string,
    name: string,
    expiryDate: string,
    cvv: string,
    token?: Record<string, any>,
}

export interface InputProps {
    value: string;
    errors: Record<string, any>;
    touched: Record<string, any>;
    setValue: (value: string) => void;
}
