let romanToInt = function(string){
    let roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let result = 0;
    for(let i = 0; i < string.length; i++){
        if(roman[string[i]] < roman[string[i+1]]){
            result -= roman[string[i]];
        } else if(roman[string[i]] >= roman[string[i+1]] || i === string.length - 1){
            result += roman[string[i]];
        } else if(string[i] === string[i+1]){
            result += roman[string[i]];
        }
    }
    return result;
}