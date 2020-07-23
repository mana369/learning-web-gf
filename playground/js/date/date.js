const oneDay = 24 * 60 * 60 *1000;

const today = new Date();
let yesterday = new Date();
yesterday.setTime(today.getTime() - oneDay);

console.log(`Mai datum: ${format(today)}`);
console.log(`Tegnapi datum: ${format(yesterday)}`);

console.log();
console.log(format(new Date('2018-10-03T07:07:00')));

/**
 * 
 * @param {Date} date
 * @returns {string}
 */
function format(date) {
    return `${date.getFullYear()}.` + 
        `${date.getMonth() +1 < 10 ? `0${date.getMonth()+1}` : date.getMonth()+1}.`+
        `${date.getDate() +1 < 10 ? `0${date.getDate()+1}` : date.getDate()+1}. ` +
        `${date.getHours() < 11 ? `0${date.getHours()}` : date.getHours()}:`+
        `${date.getMinutes() < 11 ? `0${date.getMinutes()}` : date.getMinutes()}:`+
        `${date.getSeconds() < 11 ? `0${date.getSeconds()}` : date.getSeconds()}`;
}