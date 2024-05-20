import { StyleSheet, View } from 'react-native';
import EmptyCard from '../components/EmptyCard';
import { useSelector } from 'react-redux';
import CardList from '../components/CardList';
import { useNavigation } from 'expo-router';

export default function HomeScreen() {
    const navigation = useNavigation();
    const { cards } = useSelector((state: Record<string, any>) => state.cards);
    console.log('Navigation ID:', navigation.getState());
    return (
        <View style={styles.container}>
            {
                cards?.length > 0 ? <CardList cards={cards} /> : (<EmptyCard />)
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#D0D0D0'
    },
});
