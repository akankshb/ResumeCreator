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
        baseURL: 'http://127.0.0.1:8000',
        data: {
            fullName: name,
            Age: age,
            Email: email
              },
        transformRequest: [function (data, headers) {
            // data['age'] = parseInt(data['age']);  
        return data;
              }]
    })
    instance({
        method: 'get',
        url: "/users",
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
    
      instance({
        method: 'get',
        url: "/users/user@example.com",
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
        {() => instance.post('/users',
            // data{
            //     name: 
            // }
        )}>
        Create Account
        </button>
        
        </div>
        
    );
}

export default Form;
