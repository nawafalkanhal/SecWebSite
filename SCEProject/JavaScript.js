


function validate(){
 
  let phoneNum = document.getElementById("phoneNum").value; 
let error_message = document.getElementById("error_message");


let text;
  
    
  if(isNaN(phoneNum) || phoneNum.length != 10){
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
      error_message.style.padding = "10px";
    return false;
  }
     return true
  
      
    
        
      


  }
   
  
 



