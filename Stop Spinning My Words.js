// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
// spinWords( "This is a test") => returns "This is a test"
// spinWords( "This is another test" )=> returns "This is rehtona test"
function spinWords(string) {
  //razdeli stringa na dumi
  //proveri dali bukvite sa 5 ili poveche
  //ako dumite sa s 5 ili poveche bukvi , oburni reda na bukvite.
  string = string.split(" ");
  let finalSentence = [];
  //   console.log(string);
  for (i = 0; i < string.length; i++) {
    // console.log(string[i]);
    if (string[i].length >= 5) {
      string[i] = string[i].split("").reverse().join("");
      finalSentence.push(string[i]);
      //   console.log(finalSentence);
      //   console.log(string[i]);
    } else {
      finalSentence.push(string[i]);
    }
  }
  return finalSentence.join(" ");
}
console.log(spinWords("Hey fellow warriors"));
