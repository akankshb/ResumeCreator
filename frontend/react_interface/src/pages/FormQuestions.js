import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import "./FormQuestions.css"
function Form() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    return (
        <div className="App">
        <h1>Resume Builder</h1>
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
                value={age} 
                onChange={(e) => setAge(e.target.value)}
            />
            </label>
        </form>
        
        </div>
        
    );
}

export default Form;
