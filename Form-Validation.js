// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUCKi6uKaSi1uruGc28x3jqWOoR9b2cBs",
  authDomain: "form-fccde.firebaseapp.com",
  projectId: "form-fccde",
  storageBucket: "form-fccde.appspot.com",
  messagingSenderId: "105154081246",
  appId: "1:105154081246:web:cc4b55c88acf9e2dd5ad4f",
  measurementId: "G-BDVDELV1EK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 

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
           
            
      

 
     