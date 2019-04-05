// Code your solution here!

function printString(myString) {
  console.log(myString[0])
  if(myString.length > 1) {
    let mySubstring = myString.substring(1, myString.length);
    printString(mySubstring)
  } else {
    return true;
  }
}

function reverseString(myString) {
  if (myString.length < 2) {
    return myString;
  } else {
    return reverseString(myString.substring(1)) + myString[0];
  }
}

function isPalindrome(word) {
  if(word.length <= 1) {
    return true;
  } else if(word[0] === word[word.length - 1]) {
    return isPalindrome(word.slice(1, word.length - 1));
  } else {
    return false;
  }
}

function addUpTo(arr, index) {
  let newArr = arr.slice(0, index + 1)
  if(newArr.length > 1) {
    return newArr[0] + addUpTo(newArr.slice(1), index)
  } else {
    return newArr[0]
  }
}

function maxOf(arr) {
  if(arr.length > 1) {
    if(arr[0] > arr[1]) {
      arr.splice(1, 1)
      return maxOf(arr)
    } else {
      arr.splice(0, 1)
      return maxOf(arr)
    }
  } else {
    return arr[0]
  }
}

function includesNumber(arr, num) {
  if((arr.length === 1) && (arr[0] !== num)) {
    return false;
  } else if(arr.length >= 1){
    if(arr[0] === num) {
      return true;
    } else {
      return includesNumber(arr.slice(1), num)
    }
  }
}
