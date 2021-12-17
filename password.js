const readline = require('readline')
const figlet = require('figlet');




const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  console.log("Welcome to the password validator tool.")

  reader.question("Please enter in a secure password: ", function(input){
	
	
	let password = input

    // checks password length is at least 10, checks special characters, symbols, checks uppercase letters, checks numbers
    var strongPasswordCheck = new RegExp("^(?=.{10,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");

	if (strongPasswordCheck.test(password)) {
            console.log(
              
              figlet.textSync("Congrats", { horizontalLayout: 'full'})
            )
        } else {
          console.log(
          figlet.textSync("Fail", { horizontalLayout: 'full'})
          )
        }
        


	// This line closes the connection to the command line interface.
	reader.close()

});




