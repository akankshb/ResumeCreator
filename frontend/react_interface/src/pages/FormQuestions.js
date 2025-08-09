import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import "./FormQuestions.css"
import axios from 'axios'

function Form() {
    let [name, setName] = useState("");
    let [age, setAge] = useState("");
    let [email, setEmail] = useState("");
    let variable = "";
    const instance = axios.create ({
        url: url,
        responseType: 'stream',
        data: {
            name: name,
            age: age,
            email: email
              },
        transformRequest: [function (data, headers) {
            name = name;
            email = email;
            age = parseInt(age);
        return data;
              }]
    })
    function ToFirebase(method, url){
        axios({
            method: method ,
            url: url,
            responseType: 'stream',
            data: {
                firstName: name,
                age: age,
                email: email
              },
              transformRequest: [function (data, headers) {
                name = name;
                email = email;
                age = parseInt(age);
                return data;
              }]
        // axios.get("http://127.0.0.1:8000/docs#/users/akankshborah@gmail.com")
        // .then(response => {
        //   console.log("The post function is working")
        // })
        // .catch(function (error) {
        //     console.error(error);
        //   })
    })}
    axios({
        method: 'get',
        url: "http://127.0.0.1:8000/users",
        responseType: 'stream'
      })
    // axios.get("http://127.0.0.1:8000/docs#/users/akankshborah@gmail.com")
    .then(response => {
      console.log(response.data);
      variable = JSON.stringify(response.data);
      console.log("This is variable"+variable);
    })
    .catch(function (error) {
        console.error(error);
      });    
    return (
        <div className="App">
        <script>
        alert("hi!")
        console.log("This is working");
        document.getElementById("data").innerHTML = "something"; 
        </script>
        <h1>Resume Builder</h1>
        <p id = "data"></p>
        <p>Explanation for website use needed*</p>
        <form>
            <label>1. Enter your full name: 
            <br></br>
            <input              
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}          />
            </label>
        </form>
        <form>
            <label>2. Enter your age:
                <br/> 
            <input 
                type="number" 
                name="age"
                min = "12"
                max = "120"  
                value={age} 
                onChange={(e) => setAge(e.target.value)}
            />
            </label>
        </form>
        <form>
            <label>2. Enter your email:
                <br/> 
            <input 
                name="email"
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
            />
            </label>
        </form>
        <button onClick=
        {() => instance.post(
            
        )}>
        Create Account
        </button>
        
        </div>
        
    );
}

export default Form;
