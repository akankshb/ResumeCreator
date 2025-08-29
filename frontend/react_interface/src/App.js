import logo from './logo.svg';
import './App.css';
import Form from './pages/CreateAccount/SignUp.js';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Resume Creator</h1>
        <BrowserRouter>
          <a href="/signup" className="button">Sign up Here</a>
          <Routes>
            <Route path="/signup" element={<Form />} />
          </Routes>
        </BrowserRouter>
        {/* <Form/> */}
      </header>
      <script>
        alert("hi");
        </script>
    </div>
  );
}

export default App;
