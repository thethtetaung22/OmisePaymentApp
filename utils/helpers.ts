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

export const structureExpiryDate = (date: string) => {
    console.log('Date:', date);
    if (date?.length < 1) {
        return '';
    }

    if (date[date.length - 1] === '/') {
        return date.slice(0, date.length - 1)
    }

    switch (date.length) {
        case 1: {
            if (parseInt(date) > 1) {
                return `0${date}`
            }
            return date
        };
        case 2: {
            const [first, second] = date.split('');
            if (parseInt(first) > 1) {
                return `0${first}/${second}`
            } else {
                return date;
            }
        }
        case 3: {
            const month = date.slice(0, 2), year = date.slice(2, date.length);
            return `${month}/${year}`
        }
        default: return date;
    }
}
