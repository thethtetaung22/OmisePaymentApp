import { useState, useEffect } from 'react';
import valid from "card-validator";

export default function useCardHolderNameValidate(holderName: string) {
    const [result, setResult] = useState<{
        isPotentiallyValid: boolean,
        isValid: boolean,
    }>({
        isPotentiallyValid: false,
        isValid: false,
    });

    useEffect(() => {
        const validation = valid.cardholderName(holderName);

        setResult({
            isPotentiallyValid: validation.isPotentiallyValid,
            isValid: validation.isValid
        });
        // if (cardNumber?.length > 3) {
        //     const lastFourDigit = ;

        // } else {
        //     setResult({
        //         isPotentiallyValid: false,
        //         isValid: false,
        //         cardType: '',
        //         lastFourDigit: ''
        //     })
        // }
    }, [holderName]);

    return result;
}