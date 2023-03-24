 
           document.title='Form Validation'
           
           function validation() {
           
           let username=document.getElementById('username').value
            let password=document.getElementById('password').value 
            let loginButton=document.getElementById('loginButton').value
            let loginSuccess='Login Successful!!!'
              
 
                if (username == "") {
              document.getElementById("error").innerHTML =" ** Please fill the username field";
               
              return false;
                }
                 
                if(username !=='israelmayowa580@gmail.com'){
                  document.getElementById('error').innerHTML='Invalid username or password'
                return false;
                }
               
                 
                 
                 if(username =='israelmayowa580@gmail.com'){      
             setTimeout(()=>{
              document.getElementById('error').innerHTML=""},2)
             }
            
               
               if(password==''){
             document.getElementById('error2').innerHTML='**Please input Password'
           
             return false;  
                }
                if (password !=='mayowaisrael5'){
                  document.getElementById('error2').innerText='Incorrect Passsword'
                  return false;
                }if(password =='mayowaisrael5')

                 setTimeout(()=>{
              document.getElementById('error2').innerHTML=""},2)
           
           }
           
            
      

 
     