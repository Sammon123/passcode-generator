# Passcode Generator


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


<p>This app is ment to generate a random password for 12 characters by determining the varibles for lowercase, uppercase, numberss and symbols. a for loop is made for said password and return it to the console after. afterward manipulate the DOM to let it generate added event on the for when you click you would get the value of the password.</p>

[Application](http://127.0.0.1:5500/Develop/index.html)

# Developer

### Peter Sammon

