/** product: calculate the product of an array of numbers. */

function product(nums, idx = 0) {
  if (idx === nums.length) return 1;
  return nums[idx] * product(nums, idx + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, longestSoFar = 0) {
  if (idx === words.length) return longestSoFar;
  longestSoFar = Math.max(words[idx].length, longestSoFar )
  return longest(words, idx + 1, longestSoFar)
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, everyOtherStr = "") {
  if (idx >= str.length) return everyOtherStr;

  everyOtherStr += str[idx];

  return everyOther(str, idx + 2, everyOtherStr);

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  // remove non-alphanumeric characters and
  // change the string to lowercase
  str = str.replace(/[^a-z0-9]/i, '').toLowerCase();

  // and get the length of the string
  const len = str.length;

  if (len <= 1) return true;
  if (str[0] !== str[len - 1]) return false;

  // proper tail call optimized recursion
  return isPalindrome(str.slice(1, -1)); //copies the next portion of the string without the last or first elements
}

// source: https://blog.logrocket.com/ispalindrome-a-recursive-approach/


/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val,  arrIdx = 0) {
if (arrIdx === arr.length) return -1;
if (val === arr[arrIdx]) return arrIdx;

return findIndex(arr, val, arrIdx + 1) //remember to return these!
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str === "") // This is the terminal case that will end the recursion
    return "";
  
  else
    return revString(str.substr(1)) + str.charAt(0);
}
//https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, keyIdx, arr = []) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
  }




/** binarySearch: given a SORTED array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  if (left > right) {
    return -1;
  } //if left is greater than right, there is nothing in the array
  let middle = Math.floor((right + left) / 2);
  if (arr[middle] === val) {
    return middle;
  }
  // grabbing the middle by avging, remembering to check if val = middle
  if (arr[middle] > val) {
    return binarySearch(arr, val, left, middle - 1);
  }
  // if the middle val is greater than the target, we move the middle down left by one
  return binarySearch(arr, val, middle + 1, right);
  //else we move it up right by one
  }



module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
