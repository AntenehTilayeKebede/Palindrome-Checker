function checkPalindrome(input) {
  var cleanedInput = input.toLowerCase().replace(/[^a-z0-9]/g, "");
  var reversedInput = cleanedInput.split("").reverse().join("");

  return cleanedInput === reversedInput;
}
function clickyBoi() {
  document.querySelector("#check-btn").onclick = () => {
    const input = document.getElementById("text-input").value;

    if (input == "") {
      document.getElementById("result").innerHTML = "";
      return alert("Please input a value");
    }

    const isPal = checkPalindrome(input.toUpperCase());

    document.getElementById("result").innerHTML = `${input} is ${
      isPal ? "" : "not "
    }a palindrome`;
  };
}

// Call the clickyBoi function to attach the event listener to the button
clickyBoi();
