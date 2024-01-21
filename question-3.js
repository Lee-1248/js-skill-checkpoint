// Question 3: User Authentication

function authenticateUser(username, password) {
    const validUsername = "user123";
    const validPassword = "securepass";
    if (username === validUsername && password === validPassword){
        return "Login successful"
    } 
    return "Login failed. Please check your username and password."
  }
  
  