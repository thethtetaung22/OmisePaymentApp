// LoadingDialog.js
import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { useMyContext } from '../context/MainContext';
import { asstes } from '../assets';

const MyModal = () => {
    const { isLoading, isPaymentSuccess, setIsPaymentSuccess } = useMyContext();

    const renderModelBody = () => {
        if (isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator size="large" color="#4AD8DA" />
                    <Text style={styles.text}>Processing payment...</Text>
                </View>
            )
        } else if (isPaymentSuccess) {
            return (

                <View style={styles.container}>
                    <Image
                        source={asstes.images.check}
                        width={20}
                        height={20}
                        style={{ width: 40, height: 40 }}
                    />
                    <Text style={styles.text}>Payment success.</Text>
                    <TouchableOpacity style={styles.okBtn} onPress={() => setIsPaymentSuccess(false)}>
                        <Text style={styles.btnText}>OK</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }
    return (
        <Modal isVisible={isLoading || isPaymentSuccess}>
            {renderModelBody()}
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        opacity: 70,
        padding: 20,
        borderRadius: 30
    },
    text: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 10,
        color: '#4AD8DA'
    },
    okBtn: {
        backgroundColor: '#4AD8DA',
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginTop: 20,
        width: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6
    },
    btnText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white'
    }
});

export default MyModal;
