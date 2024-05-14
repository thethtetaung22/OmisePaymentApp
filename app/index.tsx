import { StyleSheet, View } from 'react-native';
import EmptyCard from '../components/EmptyCard';
import { useSelector } from 'react-redux';
import CardList from '../components/CardList';

export default function HomeScreen() {
    const { cards } = useSelector((state: Record<string, any>) => state.cards);

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
    },
});
