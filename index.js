// Code your solution here!


function printString(string){

    if(string.length === 1){
        console.log(string[0]);
    } else {
        console.log(string[0]);
        return printString(string.substring(1, string.length))
    }

}

function reverseString(string){
    if(string.length === 1){
        return string[0]
    } else {
        return reverseString(string.substring(1, string.length)) + string[0]
    }
}

function isPalindrome(string){
    if(string.length === 1){
        return true
    } else if(string.length === 2) {
        if(string[0] === string[1]){
            return true
        } else {
            return false
        }
    } else {
        if(string[0] === string[string.length-1]){
            // debugger
            return isPalindrome(string.substring(1, string.length-1))
        } else {
            return false
        }
    }
}

function addUpTo(array, index){
    // debugger
    if(index === 0){
        return array[index]
    } else {
      index -= 1
      return addUpTo(array.slice(1, array.length), index) + array[0]
    }
}

function maxOf(array){

    if(array.length === 1){
       return array[0]
    } else {
        if(array[0] < array[array.length-1]){
            return maxOf(array.slice(1, array.length))
        } else {
            return maxOf(array.slice(0, array.length-1))
        }
    }

}

function includesNumber(array, num){
    if(array.length === 1){
        if(array[0] === num){
            return true
        } else {
            return false
        }
    } else {
        if(array[0] != num){
            return includesNumber(array.slice(1, array.length), num)
        } else {
            return true
        }
    }
}