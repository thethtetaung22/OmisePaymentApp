import { View, Text, TextInput } from 'react-native'
import React from 'react';
import { InputProps } from '../constants/interfaces';
import { styles } from './Styles';
import useCardHolderNameValidate from '../hooks/useCardNameValidate';

const CardHolderNameInput = ({
    value,
    setValue,
    errors,
    touched
}: InputProps) => {
    const { isPotentiallyValid, isValid } = useCardHolderNameValidate(value);

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Name on card</Text>
            <TextInput
                style={styles.textField}
                placeholder="Ty Lee"
                onChangeText={setValue}
                value={value}
            />
            {
                !isPotentiallyValid &&
                <Text style={[styles.inputLabel, styles.errorMessage]}>Invalid card holder number.</Text>
            }
            {
                errors?.name && touched?.name ? (
                    <Text style={[styles.inputLabel, { color: 'red', fontSize: 13 }]}>{errors?.name}</Text>
                ) : null
            }
        </View>
    )
}

export default CardHolderNameInput;
