const input = document.getElementById("input");

function reverseString(str) {
  return str.split("").reverse().join("");
}

function check() {
  const value = input.value;
  const reverse = reverseString(value);

  if (value === reverse) {
    alert("P A L I N D R O M E");
  } else {
    alert("Try again!");
  }
  // clearing the input field after checking the palindrome.
  input.value = "";
  
}
