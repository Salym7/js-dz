'use strict';

const birthday = prompt('Введите свой год рождение');
birthday === null || birthday === '' ? alert('Жаль, что Вы не захотели ввести свой год рождение') : birthday
const city = prompt('Введите свой город');
city === null || city === '' ? alert('Жаль, что Вы не захотели ввести свой город') : city
const sport = prompt('Введите свой любимый спорт');
sport === null || sport === '' ? alert('Жаль, что Вы не захотели ввести свой любимый вид спорта') : sport

let age

if (birthday === null || birthday === '') {
    age = 'Вы не указали свой год рождения'
} else {
    age = `Вам ${2022 - birthday} год`
}


let country

if (city === 'Киев') {
    country = 'Ты живешь в столице Украины';
} else if (city === 'Варшава') {
    country = 'Ты живешь в столице Польши';
} else if (city === 'Прага') {
    country = 'Ты живешь в столице Чехии';
} else if (city === null || city === '') {
    country = 'Вы не ввели свой город';
} else {
    country = 'Ты живешь в городе ' + city;
}

let sportsman

if (sport === 'Бокс') {
    sportsman = 'Круто! Хочешь стать как Александр Усик';
} else if (sport === 'Футбол') {
    sportsman = 'Круто! Хочешь стать как Лионель Месси';
} else if (sport === 'Бег') {
    sportsman = 'Круто! Хочешь стать как Усейн Болт';
} else if (sport === null || sport === '') {
    sportsman = 'Вы не ввели свой любимый вид спорта';
} else {
    sportsman = 'Твой любимый вид спорта ' + sport;
}

alert(age + '\n' + country + '\n' + sportsman);

