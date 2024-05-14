import { ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Card from './Card';
import { CardInterface } from '../constants/interfaces';

interface Props {
    cards: Array<CardInterface>
}

const CardList = ({ cards }: Props) => {
    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            {
                cards.map((card, i) => (
                    <Card key={i} card={card} />
                ))
            }
        </ScrollView>
    )
}

export default CardList;

const styles = StyleSheet.create({
    contentContainer: {
        padding: 16,
        rowGap: 12,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    }
});
