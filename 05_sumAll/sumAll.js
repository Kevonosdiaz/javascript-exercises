const sumAll = function (x, y) {
    res = 0;

    // Return an error for non-integers or negative numbers
    if (!Number.isInteger(x) || !Number.isInteger(y) || x < 0 || y < 0) {
        return "ERROR";
    }

    // Switch the numbers so that x is the smaller num
    if (x > y) {
        let temp = x;
        x = y;
        y = temp;
    }

    for (x; x <= y; x++) {
        res += x;
    }
    return res;
};

// Do not edit below this line
module.exports = sumAll;
