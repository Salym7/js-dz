'use strict';

const padString = (
    initialString,
    estimatedLength,
    symbol = '*',
    right = true
) => {
    if (typeof initialString !== 'string') throw new Error('initialString is not in type String');
    if (typeof estimatedLength !== 'number') throw new Error('estimatedLength is not in type Number');

    if (initialString.length === estimatedLength) return initialString;
    if (initialString.length > estimatedLength) return initialString.substring(0, estimatedLength);

    if (typeof symbol !== 'string') throw new Error('symbol is not in type String');
    if (symbol.length > 1) throw new Error('symbol length is too long');

    if (typeof right !== 'boolean') throw new Error('side length is too Boolean');

    const symbols = symbol.repeat(estimatedLength - initialString.length);

    return right ? initialString + symbols : symbols + initialString;
}

console.log(
    padString('hello', 10, '/', false)
);