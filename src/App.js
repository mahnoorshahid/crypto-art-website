import './App.css';
import NavBar from './components/nav';
import Card from './components/card'

function App() {
  return (
    <div className="App maxWidth">
    <NavBar/>
      <header className="App-header">
      <h1 className="header">
        <span>
        The New Art Space {' '}  
        </span>
        <span>
        with a {' '}  
        </span>
        <span>
         Sustainable Future {' '}  
        </span>
      </h1>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a
          className="button"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > 
          <div className="buttonText">
          Learn More
          </div>
          <span className="arrow">
          &rarr;
          </span>
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
