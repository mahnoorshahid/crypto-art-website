import './App.css';
import NavBar from './components/nav';
import Card from './components/card'

function App() {
  return (
    <div className="App maxWidth">
    <NavBar/>
      <header className="App-header">
      <h1 className="header">
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
      <h1>how it works</h1>
      <section className="maxWidth">
    
        <Card/>
      </section>
    </div>
  );
}

export default App;
