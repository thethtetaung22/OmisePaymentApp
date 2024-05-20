import { useState, useEffect } from 'react';
import valid from "card-validator";

export default function useExpiryDateValidate(expiryDate: string) {
    const [result, setResult] = useState<{
        isPotentiallyValid: boolean,
        isValid: boolean,
        month: string,
        year: string
    }>({
        isPotentiallyValid: false,
        isValid: false,
        month: '',
        year: ''
    });

    useEffect(() => {
        const validation = valid.expirationDate(expiryDate);

        setResult({
            isPotentiallyValid: validation.isPotentiallyValid,
            isValid: validation.isValid,
            month: validation?.month || '',
            year: validation?.year || ''
        });
    }, [expiryDate]);

    return result;
}