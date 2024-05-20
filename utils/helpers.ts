export const restructureCardNumber = (number: string) => {
    const numberStr = number.replace(/\s+/g, '');
    console.log('NumberStr:', numberStr)
    const textArr = [];
    for (let i = 0; i < numberStr.length; i++) {
        if (i % 4 === 0) {
            textArr.push(' ')
        }
        textArr.push(numberStr[i]);
    }
    return textArr.join('')
}