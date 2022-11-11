let HomePage = () => {
    window.location.href = "index.html";
  };
  
  let btn = document.getElementById("pc_Sbtn");
  btn.addEventListener("click", () => {
    Create_Account();
  });
  
  let flag;
  
  let getData = JSON.parse(localStorage.getItem("SignUp_Data")) || [];
  
  let Data = JSON.parse(localStorage.getItem("SignUp_Data"));
  
  let Create_Account = () => {
    event.preventDefault();
  
    
  
    let email = document.getElementById("pc_Semail").value;
  
    let password = document.getElementById("pc_Spassword").value;
  
    let User = {
     
      email,
      password,
    };
    
   
        if (email !== "") {
          if (password.length >= 8) {
            getData.push(User);
            localStorage.setItem("SignUp_Data", JSON.stringify(getData));
            window.location.href = "loginpage.html";
          } else {
            alert("Password should be more 8 characters");
          }
        } else {
          alert("Please fill the Email Address");
        }
      } 
   