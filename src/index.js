module.exports = function toReadable(number) {
    let readableN = '';

    // check for integer
    if (number.isInteger === false) {
        return "must be integer number!"
    }

    // check for sign
    let sign = '';
    if (number < 0) {
        readableN = 'minus ';
        number = Math.abs(number);
    }

    const teens = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundredth = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    

    // сотни
    if (number > 99) {
        let pos100 = Math.trunc(number / 100);        
        number = number % 100;
        readableN = hundredth[pos100 - 1] + ' hundred ';
        if (number == 0) return hundredth[pos100 - 1] + ' hundred';
    }


    if (number < 20) {
        readableN = readableN + teens[number];
        return sign + readableN;
    }

    // десятки
    let pos10 = Math.trunc(number / 10);
    number = number % 10 ;    
    if (pos10 > 0) {
        readableN = readableN + tens[pos10 - 2];
    };

     //  единицы
    let pos1 = number;
    if (pos1 > 0) {
        readableN = readableN + ' ' + teens[pos1];
    };  
           
    return sign + readableN;
}
