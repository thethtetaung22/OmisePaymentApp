import { useFonts } from 'expo-font';
import { Link, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import 'react-native-reanimated';
import { Provider } from 'react-redux';
import store from '../redux/store';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded] = useFonts({
        "FC-Subject-Rounded-Bold": require('../assets/fonts/FC-Subject-Rounded-Bold.ttf'),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <Provider store={store}>
            <Stack
                screenOptions={({ route }: any) => ({
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontFamily: 'FC-Subject-Rounded-Bold'
                    },
                    headerRight: () => {
                        switch (route.name) {
                            case 'index': return (
                                <Link href={'/add-card'}>
                                    <MaterialIcons name='add' size={32} />
                                </Link>
                            );
                            default: return;
                        }
                    }
                })}
            >
                <Stack.Screen
                    name="index"
                    options={{
                        headerTitle: 'Cards'
                    }}
                />
                <Stack.Screen
                    name="add-card"
                    options={{
                        headerTitle: 'Add New Card',

                    }}
                />
                <Stack.Screen name="+not-found" />
            </Stack>
        </Provider>
    );
}
