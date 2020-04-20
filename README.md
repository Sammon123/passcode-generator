# Passcode Generator

![Password Generator](C:\Users\Peter\bootcamp\homework\passcode-generator\Assets\app.png)

```javascript
function generate(length = 12) {
  var upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
  var lower = "qwertyuiopasdfghjklzxcvbnm";
  var number = "1234567890";
  var symbol = "!@#$%^&*(){}<>?,./[]-_=+";
  var writePassword = upper + lower + number + symbol;

  var password = "";
  for (var i = 0; i < length; i++) {
    var character = Math.floor(Math.random() * writePassword.length);
    password += writePassword.substring(character, character + 1);
  }

  return password;
}

window.onload = function () {
  var generateButton = this.document.querySelector("#generate");
  generateButton.addEventListener("click", function () {
    document.querySelector("#password").value = generate();
  });
};
```
