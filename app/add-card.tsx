import { StyleSheet, Text, View } from 'react-native';

export default function AddCard() {
    return (
        <View style={styles.container}>
            <Text>Add new card</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
});
