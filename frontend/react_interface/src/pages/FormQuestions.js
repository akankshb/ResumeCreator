import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import "./FormQuestions.css"
import axios from 'axios'

function Form() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    let variable = "";
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
        <h1>Resume Builder</h1>
        <p id = "data"></p>
        <script> alert("hi!") </script>
        {/* <script>
        alert("hi!")
            console.log("This is working");
            document.getElementById("data").innerHTML = "something"; </script> */}
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
        <button onClick={
            () => alert("This button works") 
        }>Create Account</button>
        
        </div>
        
    );
}

export default Form;
