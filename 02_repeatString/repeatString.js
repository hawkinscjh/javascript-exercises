const repeatString = function(s, k) {
    if (k < 0) {
        return 'ERROR'
    };
    
    let newString = '';
    for (i=0; i <k; i++) {
        newString = newString+s;
    };
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
