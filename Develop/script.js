function generate(length) {
  var upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
  var lower = "qwertyuiopasdfghjklzxcvbnm";
  var number = "1234567890";
  var symbol = "!@#$%^&*(){}<>?,./[]-_=+";
  var writePassword = upper + lower + number + symbol;

  var password = "";
  for (var = 0; i < length; i++) {
      var character = Math.floor(Math.random() * writePassword.length);
      password += writePassword.substring(character, character + 1);
  }

  return password;
};
