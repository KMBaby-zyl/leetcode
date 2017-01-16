/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let operators = {'*': true, '/': true, '+': true, '-': true};
    for(var i = 0; i<tokens.length; i++){
        if(tokens[i] in operators){
            tokens[i-2] = ~~eval( '(' + '(' + tokens[i-2] +')' + tokens[i] + '(' + tokens[i-1] + ')' +  ')' );
            tokens.splice(i-1,2);
            i = i-2;
        }
    }
    
    console.log(tokens);
    
    return eval(tokens[0])
};
