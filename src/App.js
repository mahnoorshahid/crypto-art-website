import './App.css';
import NavBar from './components/nav';

function App() {
  return (
    <div className="App maxWidth">
    <NavBar/>
      <header className="App-header">
      <h1>
        The New Art Space with a Sustainable Future
      </h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section>
        <h1>how it works</h1>
      </section>
    </div>
  );
}

export default App;
