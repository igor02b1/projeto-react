import './App.css';
import Frases from './components/Frases';
import HellWorld from './components/HelloWorld.js';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  let nome = "igor";
  return (
    <div className="App">
      <h1>OI REACt!!!!</h1>
        <p>O nome do usuário q está usando é {nome}</p>
        <HellWorld />
        < Frases />
        < SayMyName nome="igor" />
        < SayMyName nome="joão" />
        < Pessoa nome="larry" idade="24" profissao="engenheiro de software" foto="https://placeholder.com/100" />
    </div>
  );
}

export default App;
