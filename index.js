function printString(input){
    if(input.length === 1){
        console.log(input);
    } else {
        console.log(input[0]);
        printString(input.substring(1, input.length))
    }
}

function reverseString(input){
    if(input.length === 1){
        return input
    } else {
        return reverseString(input.substring(1, input.length)) + input[0]
    }
}

function isPalindrome(input){

    if(input.length === 1){
        return true
    } else if (input.length === 2){
        if(input[0] === input[input.length-1]){
            return true
        } else {
            return false
        }
    } else {
        if(input[0] === input[input.length-1]){
            return isPalindrome(input.substring(1, input.length-1))
        } else {
            return false
        }
    }
}

function addUpTo(input, index){
    if(index === 0){
        return input[index]
    } else {
        return addUpTo(input.slice(1, input.length), index-1) + input[0]
    }
}

function maxOf(input){
    if(input.length === 1){
        return input[0]
    } else {
        if(input[0] > input[input.length-1]){
            input[input.length-1] = input[0]
            return maxOf(input.slice(1, input.length))
        } else {
            return maxOf(input.slice(1, input.length))
        }
    }
}

function includesNumber(input, num){
    if(input.length === 1){
        if(input[0] === num){
            return true
        } else {
            return false
        }
    } else {
        if(input[0] === num){
            return true
        } else {
            return includesNumber(input.slice(1, input.length), num)
        }
    }
}