import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Azure Playground <button>Click Me</button>
        </p>
        <a
          className="App-link"
          href="https://portal.azure.com/#home"
          target="_blank"
          rel="noopener noreferrer"
        >
          First Change
        </a>
      </header>
    </div>
  );
}

export default App;
