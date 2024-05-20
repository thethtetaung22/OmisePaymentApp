import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    },
    errorMessage: {
        color: 'red',
        fontSize: 13
    }
});
