// Логические операторы
// 1) && - и
// 2) || - или
// 3) ! - не (инверсия)
// 4) ?? - строгая проверка на null и undefined
// 5) (num && str) || ("zxc" || ("zxc" && 123)) - через операторы можно создавать комбинации

/**
 * Принимает размер файла word/excel и проверяет соответствует ли размер файла диапазону
 */
const checkMemory = (num) => {
    // 0 - 100 MB

    // if (num === undefined || num === null) {
    //     console.log('### Ошибка')
    //     return;
    // }

    const baseNum = num ?? 1

    if (!baseNum && baseNum !== 0) {
        console.log('### Ошибка')
        return;
    }

    if (baseNum >= 0 && baseNum <= 100) {
        console.log('### Cоответствует');
        return;
    }

    if (baseNum > 100 || baseNum < 0) {
        console.log('### Не соответствует');
    }
};

checkMemory(0)

// Преобразование типов
// 1) Если мы строку складываем с другим типом данных то этот тип данных приводится к строке
// ( под капотом работает String() )
// Пример: 1 + "1" === "1" + "1" === "1" + 1
// 2) Все типы данных преобразуются в число если мы используем арифметические действия (исключение + и строка, см. п1)
// ( под капотом работает Number() )
// 2.1) ( == ) всегда приводит к Number
// https://learn.javascript.ru/type-conversions#chislennoe-preobrazovanie
// 3) Происходит при строгом сравнении (===)
// ( под капотом работает Boolean() )
// "adsasdasd", 123, {}, [] - условно положительный (true)
// "", 0, null, undefined, NaN - условно отрицательные (false)

// ДЗ
// Доп.
// 1) https://learn.javascript.ru/operators
