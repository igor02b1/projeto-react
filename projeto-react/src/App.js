import './App.css';
import Frases from './components/Frases';
import HellWorld from './components/HelloWorld.js';

function App() {

  let nome = "igor";
  return (
    <div className="App">
      <h1>OI REACt!!!!</h1>
        <p>O nome do usuário q está usando é {nome}</p>
        <HellWorld />
        < Frases />
    </div>
  );
}

export default App;
