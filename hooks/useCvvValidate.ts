import { useState, useEffect } from 'react';
import valid from "card-validator";

export default function useCvvValidate(cvv: string) {
    const [result, setResult] = useState<{
        isPotentiallyValid: boolean,
        isValid: boolean,
    }>({
        isPotentiallyValid: false,
        isValid: false,
    });

    useEffect(() => {
        const validation = valid.cvv(cvv);

        setResult({
            isPotentiallyValid: validation.isPotentiallyValid,
            isValid: validation.isValid,
        });
    }, [cvv]);

    return result;
}