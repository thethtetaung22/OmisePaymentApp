import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import useExpiryDateValidate from '../hooks/useExpiryDateValidate';
import { styles } from './Styles';
import { InputProps } from '../constants/interfaces';
import { structureExpiryDate } from '../utils/helpers';

const ExpiryDateInput = ({
    value,
    setValue,
    errors,
    touched
}: InputProps) => {
    const { isPotentiallyValid, isValid, month, year } = useExpiryDateValidate(value);
    console.log(isPotentiallyValid, isValid, month, year);

    return (
        <View style={[styles.inputContainer, { flex: 1 }]}>
            <Text style={styles.inputLabel}>Expiry date</Text>

            <TextInput
                style={styles.textField}
                placeholder="MM/YY"
                keyboardType='numeric'
                onChangeText={setValue}
                value={structureExpiryDate(value)}
                maxLength={5}
            />
            {
                errors?.expiryDate && touched?.expiryDate ? (
                    <Text style={[styles.inputLabel, { color: 'red', fontSize: 13 }]}>{errors?.expiryDate}</Text>
                ) : null
            }
            {
                (value?.length > 1 && (!isPotentiallyValid) || (value?.length > 3 && !isValid)) &&
                <Text style={[styles.inputLabel, styles.errorMessage]}>Invalid expiry date.</Text>
            }
        </View>
    )
}

export default ExpiryDateInput