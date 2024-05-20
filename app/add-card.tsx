import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { Formik } from 'formik';
import CardNumberInput from '../components/CardNumberInput';
import { useDispatch } from 'react-redux';
import * as Yup from "yup";
import { addCard } from '../redux/slices/card.slice';
import ExpiryDateInput from '../components/ExpiryDateInput';
import CVVInput from '../components/CVVInput';
import CardHolderNameInput from '../components/CardHolderNameInput';
import { useNavigation } from 'expo-router';
import { CardInterface } from '../constants/interfaces';
import { createOmiseTokenId } from '../utils/Omise';

const CardSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required('Required'),
    number: Yup.string()
        .length(16, 'number must be 16 digits.')
        .required('Required'),
    expiryDate: Yup.string()
        .min(3, 'Too Short!')
        .max(5, 'too long')
        .required('Required'),
    cvv: Yup.string()
        .min(3, 'Too Short!')
        .max(4, 'Too Long!')
        .required('Required'),
});

export default function AddCard() {
    const dispatch = useDispatch();
    const navigation: any = useNavigation();

    const onSubmit = async (values: CardInterface) => {
        try {
            if (values) {
                const token = await createOmiseTokenId(values);

                if (token) {
                    dispatch(addCard({
                        ...values,
                        token,
                    } as any));
                    navigation.navigate('index')
                }
            }
        } catch (error) {
            console.log(error);
        }
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
                validationSchema={CardSchema}
                onSubmit={onSubmit}
            >
                {({ handleChange, handleSubmit, values, errors, touched }) => (
                    <View style={styles.formWrapper}>
                        <View style={{ flex: 1 }}>

                            <CardNumberInput
                                value={values?.number}
                                setValue={handleChange('number')}
                                errors={errors}
                                touched={touched}
                            />

                            <CardHolderNameInput
                                value={values?.name}
                                setValue={handleChange('name')}
                                errors={errors}
                                touched={touched}
                            />

                            <View style={styles.row}>
                                <ExpiryDateInput
                                    value={values?.expiryDate}
                                    setValue={handleChange('expiryDate')}
                                    errors={errors}
                                    touched={touched}
                                />
                                <CVVInput
                                    value={values?.cvv}
                                    setValue={handleChange('cvv')}
                                    errors={errors}
                                    touched={touched}
                                />
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
