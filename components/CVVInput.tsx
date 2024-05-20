import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { styles } from './Styles'
import { InputProps } from '../constants/interfaces'
import useCvvValidate from '../hooks/useCvvValidate'

const CVVInput = ({
    value,
    setValue,
    errors,
    touched,
}: InputProps) => {
    const { isPotentiallyValid, isValid } = useCvvValidate(value);

    return (
        <View style={[styles.inputContainer, { flex: 1 }]}>
            <Text style={styles.inputLabel}>CVV</Text>

            <TextInput
                style={styles.textField}
                placeholder="012"
                onChangeText={setValue}
                value={value}
            />
            {
                (value?.length > 1 && (!isPotentiallyValid) || (value?.length >= 16 && !isValid)) &&
                <Text style={[styles.inputLabel, styles.errorMessage]}>Invalid cvv number.</Text>
            }
            {
                errors?.cvv && touched?.cvv ? (
                    <Text style={[styles.inputLabel, { color: 'red', fontSize: 13 }]}>{errors?.cvv}</Text>
                ) : null
            }
        </View>
    )
}

export default CVVInput