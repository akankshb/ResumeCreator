import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import "./SignUp.css"
import axios from 'axios'

function Form() {
    let [name, setName] = useState("");
    let [age, setAge] = useState("");
    let [email, setEmail] = useState("");
    let variable = "";
    const submit = async (e) => {
        e.preventDefault();
        const message = axios.post("http://127.0.0.1:8000/users", {
                name: name,
                email: email,
                age: parseInt(age)
        }).then(res => {
                console.log(res.data); // runs when the request finishes
              })
          .catch(err => {
            console.error(err);
                      });
        }
        
    return (
        <div className="App">
        <h1>Resume Builder</h1>
        <p id = "data"></p>
        <p>Create an Account</p>
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
        {submit}>
        Create Account
        </button>
        
        </div>
        
    );
}

export default Form;
