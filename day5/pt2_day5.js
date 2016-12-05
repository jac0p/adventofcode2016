var crypto = require('crypto');

function checkIfAllDigits(x) {
  return x.every(elem => isNaN(elem))
}


function checkIfNotEmpty(x) {
  return x.every(elem => elem != "")
}


function main() { 
  var input = "cxdnnyjw";
  var password = ["", "", "", "", "", "", "", "" ];
  var testCase = "";
  var i = 0;

  console.log(checkIfAllDigits(password))
  
  
  while (password.join('').length < 8) { 
    testCase = input + i; 
    // var hashString = MD5(testCase);
    var hashString = crypto.createHash('md5').update(testCase).digest('hex')
    if (hashString.slice(0,5) == "00000"){
      console.log(hashString);
      var position = hashString[5];
      if (password[position = ""]) {
        password[position] = hashString[6];
        console.log(`CURRENT PASS: ${password}`);
      }
    }
    i++;
  };

  // CURRENT PASS: 9,9,9,0,f,6,a,1
  // PASSWORD: 9990f6a1
  console.log(`PASSWORD: ${password.join("")}`);

} 

main(); 


