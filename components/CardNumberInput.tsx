import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import React from 'react';
import useCardNumberValidate from '../hooks/useCardNumberValidate';
import { asstes } from '../assets';
import { restructureCardNumber } from '../utils/helpers';

interface Props {
    value: string;
    setValue: (value: string) => void;
}

const CardNumberInput = ({
    value,
    setValue
}: Props) => {
    const { cardType, isPotentiallyValid, isValid } = useCardNumberValidate(value);

    const getCardImage = (cardType: any) => {
        switch (cardType) {
            case 'mastercard': return asstes.images.mastercard;
            case 'jcb': return asstes.images.jcbCard;
            case 'visa': return asstes.images.visaCard;
            default: null;
        }
    }

    const renderIcons = (cardType: string) => {
        let images = [asstes.images.mastercard, asstes.images.jcbCard, asstes.images.visaCard];
        if (['visa', 'mastercard', 'jcb'].includes(cardType)) {
            images = [getCardImage(cardType)]
        }
        return (
            <View style={styles.iconsWrapper}>
                {
                    images.map(image => (
                        <Image width={20} style={styles.smallIcon} source={image} />
                    ))
                }
            </View>
        )
    }

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>ATM/Debit/Credit card number{cardType}</Text>
            <View style={styles.textFieldWrapper}>
                <TextInput
                    style={styles.textField}
                    placeholder="0000 0000 0000 0000"
                    onChangeText={setValue}
                    value={restructureCardNumber(value)}
                    maxLength={20}
                />
                {renderIcons(cardType)}
            </View>
            {
                (value?.length > 1 && (!isPotentiallyValid) || (value?.length >= 16 && !isValid)) &&
                <Text style={[styles.inputLabel, styles.errorMessage]}>Invalid card number.</Text>
            }
        </View>
    )
}

export default CardNumberInput;

const styles = StyleSheet.create({
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        rowGap: 5,
        paddingVertical: 6
    },
    inputLabel: {
        fontWeight: '700',
        fontSize: 16,
        fontFamily: 'FC-Subject-Rounded-Regular'
    },
    textField: {
        height: 50,
        maxHeight: 50,
        paddingHorizontal: 10,
        fontSize: 16,
        fontFamily: 'FC-Subject-Rounded-Regular',
        paddingRight: 20,
        borderWidth: 0,
        flex: 1
    },
    textFieldWrapper: {
        display: 'flex',
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'gray',
    },
    iconsWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 4,
        columnGap: 2
    },
    smallIcon: {
        width: 30,
        height: 15
    },
    errorMessage: {
        color: 'red'
    }
});