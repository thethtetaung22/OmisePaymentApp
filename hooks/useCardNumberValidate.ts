import { useState, useEffect } from 'react';
import valid from "card-validator";

export default function useCardNumberValidate(cardNumber: string) {
    const [result, setResult] = useState<{
        isPotentiallyValid: boolean,
        isValid: boolean,
        cardType: string,
        lastFourDigit: string
    }>({
        isPotentiallyValid: false,
        isValid: false,
        cardType: '',
        lastFourDigit: ''
    });

    useEffect(() => {
        const validation = valid.number(cardNumber);

        setResult({
            isPotentiallyValid: validation.isPotentiallyValid,
            isValid: validation.isValid,
            cardType: validation.card?.type || '',
            lastFourDigit: cardNumber.substring(12, 16)
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
    }, [cardNumber]);

    return result;
}