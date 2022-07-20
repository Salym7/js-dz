'use strict';

const String = prompt('Введите строку')
const Num = +prompt('Введите длину строки')
const Symbol = prompt('Введите символ например *')
const Boolean = prompt('Enter true or false')

function padString(justString, justNum, justSymbol = '*', justBoolean = 'true') {
    let result = null
    if (justString === undefined) return 'Not find string'
    if (justNum === null || justNum === '' || isNaN(justNum)) return 'Not find Num'
    if (justSymbol.length >= 2) return 'Enter one symbol'
    // if (justBoolean === null || justBoolean === '') return 'Enter true or false'
    if (justBoolean === 'true') result = justString + justSymbol
    if (justBoolean === 'false') result = justSymbol + justString
    result = result.substring(0, justNum);

    return result

}

console.log(padString(String, Num, Symbol, Boolean))