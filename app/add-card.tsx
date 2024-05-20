import { TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';
import { Formik } from 'formik';
import { asstes } from '../assets';
import CardNumberInput from '../components/CardNumberInput';

export default function AddCard({
    navigation
}: Record<string, any>) {

    const onSubmit = () => {

    }



    return (
        <View style={styles.container}>
            <Formik
                initialValues={{
                    name: '',
                    number: '',
                    expiryDate: '',
                    cvv: ''
                }}
                validateOnChange
                validate={(values) => {
                    console.log('Values:', values)
                }}
                onSubmit={values => console.log(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View style={styles.formWrapper}>
                        <View style={{ flex: 1 }}>

                            <CardNumberInput value={values.number} setValue={handleChange('number')} />

                            <View style={styles.inputContainer}>
                                <Text style={styles.inputLabel}>Name on card</Text>
                                <TextInput
                                    style={styles.textField}
                                    placeholder="Ty Lee"
                                    onChangeText={handleChange('name')}
                                    onBlur={handleBlur('name')}
                                    value={values.name}
                                />
                            </View>

                            <View style={styles.row}>
                                <View style={[styles.inputContainer, { flex: 1 }]}>
                                    <Text style={styles.inputLabel}>Expiry date</Text>

                                    <TextInput
                                        style={styles.textField}
                                        placeholder="MM/YY"
                                        onChangeText={handleChange('expiryDate')}
                                        onBlur={handleBlur('expiryDate')}
                                        value={values.expiryDate}
                                    />
                                </View>

                                <View style={[styles.inputContainer, { flex: 1 }]}>
                                    <Text style={styles.inputLabel}>CVV</Text>

                                    <TextInput
                                        style={styles.textField}
                                        placeholder="012"
                                        onChangeText={handleChange('cvv')}
                                        onBlur={handleBlur('cvv')}
                                        value={values.cvv}
                                    // value={expiration}
                                    // onChangeText={(text) => setExpiration(text)}
                                    />
                                </View>
                            </View>

                            <View style={styles.iconsWrapper}>
                                {/* <Image
                                    source={asstes.images.verifiedByVisa}
                                    style={styles.logoImg}
                                /> */}
                                {/* <VisaVerifiedSvg width={200} height={100} /> */}
                            </View>

                        </View>

                        <TouchableOpacity style={styles.submitBtn} onPress={() => handleSubmit()}>
                            <Text style={styles.buttonText}>Add Card</Text>
                        </TouchableOpacity>

                    </View>
                )}
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        padding: 16,
        rowGap: 12,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    formWrapper: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 36,
        columnGap: 16,
    },
    textField: {
        height: 50,
        maxHeight: 50,
        paddingHorizontal: 10,
        borderWidth: 1,
        fontSize: 16,
        borderRadius: 5,
        borderColor: 'gray',
        fontFamily: 'FC-Subject-Rounded-Regular'
    },
    submitBtn: {
        height: 50,
        backgroundColor: '#4AD8DA',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginVertical: 10
    },
    buttonText: {
        textAlign: 'center',
        verticalAlign: 'middle',
        color: 'white',
        fontWeight: '800',
        fontSize: 18,
        fontFamily: 'FC-Subject-Rounded-Regular'
    },
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
    iconsWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        columnGap: 12,
    },
    logoImg: {
        height: 20
    }
});
