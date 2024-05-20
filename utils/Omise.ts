import { CardInterface } from "../constants/interfaces";
import base64 from 'react-native-base64';
import * as Omise from 'omise-react-native';
// const omise = require('omise')({
//     secretKey: process.env.EXPO_PUBLIC_OMISE_PRIVATE_KEY,
// });

Omise.config(process.env.EXPO_PUBLIC_OMISE_PUBLIC_KEY, process.env.EXPO_PUBLIC_OMISE_PRIVATE_KEY, '2017-11-12');

export const createOmiseTokenId = async (data: CardInterface): Promise<Record<string, any>> => {

    const { name, number, expiryDate, cvv } = data;
    const [month, year] = expiryDate?.split('/');
    return await Omise.createToken({
        card: {
            name: name,
            city: 'Bangkok',
            postal_code: 10320,
            number: number,
            expiration_month: parseInt(month),
            expiration_year: parseInt(year),
            security_code: cvv
        }
    });
}

export const createCharge = async (card: CardInterface, amount: number) => {
    const token = await createOmiseTokenId(card);
    // console.log('Token:', token);
    // console.log('amount:', amount);
    // return await Omise.createCharge({
    //     description: 'test charge',
    //     amount: amount, // Random
    //     currency: 'thb',
    //     capture: true,
    //     card: token
    // });

    const chargeUrl = process.env.EXPOR_PUBLIC_OMISE_CHARGE_API_URL || 'https://api.omise.co/charges';
    try {
        const body = {
            description: 'test charge',
            amount,
            currency: 'THB',
            capture: true,
            card: token?.id
        };
        return new Promise((resolve, reject) => {
            fetch(
                chargeUrl,
                {
                    method: 'POST',
                    body: JSON.stringify(body),
                    headers: {
                        Authorization: `Basic ${base64.encode(process.env.EXPO_PUBLIC_OMISE_PRIVATE_KEY)}`,
                        'User-Agent': "omise-react-native/0.1.0",
                        'Content-Type': 'application/json',
                    }
                }
            ).then((response) => response.json())
                .then(data => {
                    console.log('Data:', data);
                    resolve(data);
                }).catch((error) => reject(error));
        })
    } catch (error) {
        console.log('Error:', error);
    }
}

export const createSource = async () => {
    return await Omise.createSource({
        type: 'internet_banking_bbl',
        amount: 500000,
        currency: 'thb'
    });
}
