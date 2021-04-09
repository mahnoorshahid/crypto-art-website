import './App.css';
import NavBar from './components/nav';
import Card from './components/card'
import CardRow from './components/cardRow'
import {BrowserRouter as Router,Route,Switch, Link} from 'react-router-dom';
import './index.css'

function Marketplace() {
  return (
    <div className="App">
      <header className="App-header sectionPadding maxWidth">
      <h1 className="header">
        <span>
        The Market Place {' '}  
        </span>
        {/* <span>
        with a  Sustainable {' '}  
        </span>
        <span>
        Future {' '}  
        </span> */}
      </h1>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
      </header>


      <section className="maxWidth sectionPadding">
      <div className="sectionRow">
      <h1>Selected Bundles</h1>
      </div>
        {/* <Card/> */}
        <CardRow moreFetch/>
      </section>
    </div>
  );
}

export default Marketplace;
