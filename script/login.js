let HomePage = () => {
    window.location.href = "./index.html";
  };
  
  let getData = JSON.parse(localStorage.getItem("SignUp_Data"));
  
  let flag;
  
  let Login = () => {
    event.preventDefault()
    let email = document.getElementById("pc_email").value;
  
    let password = document.getElementById("pc_password").value;
  
    getData.forEach((el) => {
      if (email === el.email) {
        if (password ===el.password) {
          flag = true;
        }
      } else {
        flag = false;
      }
    });
  
    if (flag == true) {
      window.location.href = "./index.html";
    } else {
      alert("Please fill correct Details");
    }
  };
  
