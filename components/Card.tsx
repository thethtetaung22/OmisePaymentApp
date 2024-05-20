import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { CardInterface } from '../constants/interfaces'
import { asstes } from '../assets';
import useCardNumberValidate from '../hooks/useCardNumberValidate';

interface Props {
    card: CardInterface
}

const Card = ({ card }: Props) => {
    const { cardType, lastFourDigit } = useCardNumberValidate(card.number);

    const getCardImage = (cardType: any) => {
        switch (cardType) {
            case 'mastercard': return asstes.images.mastercard;
            case 'jcb': return asstes.images.jcbCard;
            case 'visa': return asstes.images.visaCard;
            default: null;
        }
    }
    
    return (
        <View style={[styles.card, styles.elevation]}>
            {
                getCardImage(cardType) &&
                <Image width={200} source={getCardImage(cardType)} />
            }
            <View style={styles.numberWrapper}>
                <Text style={[styles.numberText, styles.hiddenNumber]}>••••</Text>
                <Text style={[styles.numberText, styles.hiddenNumber]}>••••</Text>
                <Text style={[styles.numberText, styles.hiddenNumber]}>••••</Text>
                <Text style={[styles.numberText]}>{lastFourDigit}</Text>
            </View>
            <View style={styles.numberWrapper}>
                <View style={styles.nameWrapper}>
                    <Text style={[styles.numberText, styles.label]}>Name on Card</Text>
                    <Text style={[styles.numberText, { color: '#202020' }]}>{card?.name}</Text>
                </View>

                <View style={styles.nameWrapper}>
                    <Text style={[styles.numberText, styles.label]}>Expires</Text>
                    <Text style={[styles.numberText, { color: '#202020' }]}>{card?.exiryDate}</Text>
                </View>
            </View>
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 25,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        rowGap: 14
    },
    elevation: {
        elevation: 8,
        shadowColor: '#52006A',
    },
    numberWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 8,
    },
    numberText: {
        fontSize: 18,
        color: 'gray',
        fontWeight: '700',
        fontFamily: 'FC-Subject-Rounded-Regular'
    },
    hiddenNumber: {
        fontSize: 26,
        textAlign: 'center',
        verticalAlign: 'middle',
    },
    label: {
        fontSize: 14
    },
    nameWrapper: {
        display: 'flex',
        flexDirection: 'column',
        rowGap: 8
    }
});
