/*## Exercise 1: Age Range Validation

**Scenario:** Validate that a user's age is within the acceptable range for test automation training (18-65).

**Requirements:**
1. Create a variable `age` with value `25`
2. Write an if-else statement that:
   - Checks if age is >= 18 AND <= 65
   - If yes, print: `"✅ Valid age range (18-65)"`
   - If no, print: `"❌ Age must be between 18 and 65"`*/

//    let age=4;
//    if(age>=18 && age<=65)
//    {
//      console.log("✅ Valid age range (18-65)")
//    }
//    else if(age>=65 && age<=66){
//     console.log("❌ Age must be between 18 and 65");
//    }else if(age>65){
//      console.log("Too old");
//    }else if(age<18){
//      console.log("Too young");
//    }

   
//## Exercise 2: Login Credentials Validator
// console.log("Exercise 2: Login Credentials Validator");
//    let username="testuser";
//    let password="Test@123";
//    let email="testuser@gmail.com";
//    if(username!="" && password!="" && email!="")
//    {
//     console.log("✅ Sufficient login credentials");
//    }else if(username!="" && password!="" && email==""){
//      console.log("❌ Insufficient credentials - provide email");
//    }
//    else if(username!="" && password=="" && email!=""){
//      console.log("❌ Insufficient credentials - provide password");
//    }else if(username=="" && password!="" && email!=""){
//      console.log("❌ Insufficient credentials - provide username");
//    }


//    //## Exercise 3: Test Status Validator
// console.log("Exercise 3: Test Status Validator");
//    let status="FAILED";
//    let errorCount=0;

//    if ((status=="PASSED"|| status=="SKIPPED" )&& errorCount==0)
//    {
//     console.log("✅ Test completed successfully");
//    }else{
//     console.log("❌ Test has issues");
//    }

//    //## Exercise 4: Response Time Validator
//    console.log("## Exercise 4: Response Time Validator");
//    let responseTime=2.999;

//    if(responseTime<3)
//    {
//     console.log("✅ Performance test PASSED (response time: X seconds)");
//    }else if(responseTime>=3)
//     {
//       console.log("❌ Performance test FAILED (response time: X seconds, threshold: 3 seconds)");
//     }

//## Additional Challenges
//function
// let Username="Marcus";
// let password="Marcus@123";
// let email="marcusjones@gmail.com";
// let userage=45;
function userlogin(Username,password,email,userage)
{
    console.log("Validating test user!!")
    if(Username!="" && (Username.lenght>=3 && Username.lenght<=20))
    {
        console.log("Username must be between 3 and 20 characters!!");
    }
     if(password!="" && password.lenght==8)
    {
        console.log("Password must be at least 8 characters long!!");
    }
    if (email!="" || !email.includes("@") || !email.includes(".")) {
        console.log("Email must be valid and contain '@' and '.'.");
    }
    if (typeof userage !== "number" || userage < 18 || userage > 120) {
        console.log("Age must be between 18 and 120.");
    }
}
let result = userlogin(
    "Marcus",
    "Marcus@123",
    "MarcusJones@gmail.com",
    45
);
    console.log(result);

 