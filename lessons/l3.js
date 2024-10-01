const screenWidth = 400;

const isDesktop = screenWidth >= 1920
const isMobile = screenWidth < 431
const isTablet = screenWidth < 1025 && screenWidth >= 431

const handleShowMessage = () => {
    // 1) if - ключевое слово
    // 2) условие ()
    // 3) тело условия (блок условия)

    // else - во всех остальных случаях
    // else if - проверка след. условия если предыдущее не выполняется

    if (isDesktop) {
        console.log('### Вы вызвали эту функцию с компьютера');
    } else if (isTablet) {
        console.log('### Вы вызвали эту функцию с планшета');
    } else if (isMobile) {
        console.log('### Вы вызвали эту функцию с мобильного телефона');
    } else {
        console.log('### Вообще не ебу с чего ты заходишь')
    }
};

// handleShowMessage();

export const checkPositiveNumber = (num) => {
    /**
     * 1) Самый плохой вариант
     */
    // if (num > 0) {
    //     return 'Число больше нуля'
    // } else if (num === 0) {
    //     return 'Число равно нулю'
    // } else {
    //     return 'Число меньше нуля'
    // }

    /**
     * 2) Уже получше, но можно и лучше
     */
    // if (num > 0) {
    //     return 'Число больше нуля';
    // } else if (num === 0) {
    //     return 'Число равно нулю';
    // }
    //
    // return 'Число меньше нуля';

    /**
     * 3) Ещё лучше
     */
    // if (num < 0) {
    //     return 'Число меньше нуля';
    // }
    //
    // if (num > 0) {
    //     return 'Число больше нуля';
    // }
    //
    // return 'Число равно нулю';
};

// checkPositiveNumber(0)

/**
 * Функция которая возвращает цену блюда
 */
const getFoodPrice = (food) => {
    // if (food === 'pizza') {
    //     return '1000 Р';
    // } else if (food === 'Apple') {
    //     return '500 Р';
    // } else if (food === 'Lime') {
    //     return '400 Р';
    // }
    //
    // return '0 р';

    switch (food) {
        case 'pizza': {
            console.log('### price 1000 Р');
            // return '1000 Р';
            break
        }
        case 'Apple': {
            console.log('### price 500 Р');
            // return '500 Р';
            break
        }
        case 'Lime': {
            console.log('### price 400 Р');
            // return '400 Р';
            break
        }
        default: {
            console.log('### price 0 Р');
            // return '0 р';
        }
    }

    return 'Проверка цены окончена'
};

console.log('### getFoodPrice 1', getFoodPrice('pizza'))
console.log('### getFoodPrice 2', getFoodPrice('Apple'))
console.log('### getFoodPrice 3', getFoodPrice('Lime'))
console.log('### getFoodPrice 4', getFoodPrice('Zalupa psa'))
