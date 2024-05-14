import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { CardInterface } from '../constants/interfaces'

interface Props {
    card: CardInterface
}

const Card = ({ card }: Props) => {
    return (
        <View style={[styles.card, styles.elevation]}>
            <Text>{card.name}</Text>
            <Text>{card.number}</Text>
            <Text>{card.exiryDate}</Text>
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
        marginVertical: 10,
    },
    elevation: {
        elevation: 20,
        shadowColor: '#52006A',
    },
});
