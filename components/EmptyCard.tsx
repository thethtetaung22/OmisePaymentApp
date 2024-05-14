import { View, StyleSheet, Text, Image } from 'react-native';
import React from 'react';
import { asstes } from '../assets';
import { Link } from 'expo-router';

const EmptyCard = () => {
    return (
        <View style={styles.container}>
            <Image
                source={asstes.images.creditCard}
                style={styles.creditCard}
            />
            <Text style={styles.text}>No Cards Found</Text>
            <Text style={styles.text}>We recommend adding a card for easy payment</Text>
            <Link href={'add-card'}>
                <Text style={[styles.text, { color: '#4AD8DA' }]}>Add New Card</Text>
            </Link>
        </View>
    )
}

export default EmptyCard;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 16
    },
    creditCard: {
        width: 50,
    },
    text: {
        color: 'black',
        maxWidth: 280,
        fontSize: 18,
        fontFamily: 'FC-Subject-Rounded-Bold',
        textAlign: 'center',
    },
});
