// import './App.css';
import HelloWorld from './Components/HelloWorld';
import styles from "./App.module.css";
import Users from './Components/Users';

function App() {
  return (
    <div className="App">
      <h1>Lets Get Started</h1>
      <Users></Users>
      <HelloWorld></HelloWorld>
    </div>
  );
}

export default App;
