'use strict';

const IntegerToEnglish = (x) => {
	if (x < 0) {
		return "Negative " + IntegerToEnglish(-x);
	}
    switch(x) {
        case 0: return "Zero";
        case 1: return "One";
        case 2: return "Two";
        case 3: return "Three";
        case 4: return "Four";
        case 5: return "Five";
        case 6: return "Six";
        case 7: return "Seven";
        case 8: return "Eight";
        case 9: return "Nine";
        case 10: return "Ten";
        case 11: return "Eleven";
        case 12: return "Twelve";
        case 13: return "Thirteen";
        case 14: return "Fourteen";
        case 15: return "Fifteen";
        case 16: return "Sixteen";
        case 17: return "Seventeen";
        case 18: return "Eighteen";
        case 19: return "Nineteen";
        case 20: return "Twenty";
        case 30: return "Thirty";
        case 40: return "Forty";
        case 50: return "Fifty";
        case 60: return "Sixty";
        case 70: return "Seventy";
        case 80: return "Eighty";
        case 90: return "Ninety";
        case 100: return "One Hundred";
        case 1000: return "One Thousand";
        case 1000000: return "One Million";
        case 1000000000: return "One Billion";
    }
    // less than 100
    for (let i = 1; i <= 9; i ++) {
        let j = i * 10;
        if ((x >= j) && (x < j + 10)) {
            let r = x - j;
            return IntegerToEnglish(j) + (r > 0 ? (" " + IntegerToEnglish(r)): "");
        }
    }
    // less than 1000
    for (let i = 1; i <= 9; i ++) {
        let j = i * 100;
        if ((x >= j) && (x < j + 100)) {
            let r = x - j;
            return IntegerToEnglish(i) + " Hundred" + (r > 0 ? (" " + IntegerToEnglish(r)): "");
        }
    }
    // less than 10000
    for (let i = 1; i <= 9; i ++) {
        let j = i * 1000;
        if ((x >= j) && (x < j + 1000)) {
            let r = x - j;
            return IntegerToEnglish(i) + " Thousand" + (r > 0 ? (" " + IntegerToEnglish(r)): "");
        }
    }
    // Million
    for (let i = 1; i <= 9; i ++) {
        let j = i * 1000000;
        if ((x >= j) && (x < j + 1000000)) {
            let r = x - j;
            return IntegerToEnglish(i) + " Million" + (r > 0 ? (" " + IntegerToEnglish(r)): "");
        }
    }
    // Billion
    for (let i = 1; i <= 4; i ++) {
        let j = i * 1000000000;
        if ((x >= j) && (x < j + 1000000000)) {
            let r = x - j;
            return IntegerToEnglish(i) + " Billion" + (r > 0 ? (" " + IntegerToEnglish(r)): "");
        }
    }
    // Divide the number into 3-digit groups from left to right
    let output = "";
    let cnt = 0;
    while (x > 0) {
        let y = x % 1000;
        x = Math.floor(x / 1000);
        if (y > 0) { // skip middle-chunk zero
            let t = "";
            if (cnt == 1) t = " Thousand ";
            if (cnt == 2) t = " Million ";
            if (cnt == 3) t = " Billion ";
            output = IntegerToEnglish(y) + t + output;
        }
        cnt ++;
    }
    if (output[output.length - 1] == ' ') { // "Three Thousand " == > "Three Thousand"
        return output.substr(0, output.length - 1);
    }
    return (output);
}

module.exports = {
	IntegerToEnglish 
}
