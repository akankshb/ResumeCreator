import logo from './logo.svg';
import './App.css';
import Form from './pages/CreateAccount/FormQuestions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Resume Creator</h1>
        <button onClick={() => {return(<Form/>);} }>Hello</button>
        {/* <Form/> */}
      </header>
      <script>
        alert("hi");
        </script>
    </div>
  );
}

export default App;
