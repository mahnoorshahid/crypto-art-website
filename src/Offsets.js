import './App.css';
import NavBar from './components/nav';
import Card from './components/card'
import CardRow from './components/cardRow'
import './index.css'

function Offsets() {
  return (
    <div className="App">
      <header className="App-header sectionPadding maxWidth">
      <h1 className="header">
        <span>
        The New Art Space {' '}  
        </span>
        <span>
        with a  Sustainable {' '}  
        </span>
        <span>
        Future {' '}  
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
  
     
      <section className="sectionPadding">
      <div className="maxWidth">

      <div className="sectionRow">
      <h1>how it works</h1>
      </div>
        <div className="gridThree">
          <div className="block">
            <h2>Discover</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet pulvinar odio eget id et sed. Enim, nec, tincidunt vel leo, ac. Massa felis gravida proin est. Ac suspendisse ornare lacinia dictum massa velit quam pharetra id.</p>
          </div>
          <div className="block">
            <h2>Buy & Sell</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet pulvinar odio eget id et sed. Enim, nec, tincidunt vel leo, ac. Massa felis gravida proin est. Ac suspendisse ornare lacinia dictum massa velit quam pharetra id.</p>
          </div>
          <div className="block">
            <h2>Offset</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet pulvinar odio eget id et sed. Enim, nec, tincidunt vel leo, ac. Massa felis gravida proin est. Ac suspendisse ornare lacinia dictum massa velit quam pharetra id.</p>
          </div>
        </div>
        </div>
      </section>

      
      <section className="sectionPadding purpleBg">
        <div className="maxWidth">
      {/* <div className="sectionRow">
      <h1>how it works</h1>
      </div> */}
        <div className="gridFour">
        <div className="block">
            <h2 className="gridSubtitle">The problem with digital art</h2>
          </div>
          <div className="block">
            <h2>Discover</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet pulvinar odio eget id et sed. Enim, nec, tincidunt vel leo, ac. Massa felis gravida proin est. Ac suspendisse ornare lacinia dictum massa velit quam pharetra id.</p>
          </div>
          <div className="block">
            <h2>Buy & Sell</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet pulvinar odio eget id et sed. Enim, nec, tincidunt vel leo, ac. Massa felis gravida proin est. Ac suspendisse ornare lacinia dictum massa velit quam pharetra id.</p>
          </div>
          <div className="block">
            <h2>Offset</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet pulvinar odio eget id et sed. Enim, nec, tincidunt vel leo, ac. Massa felis gravida proin est. Ac suspendisse ornare lacinia dictum massa velit quam pharetra id.</p>
          </div>
        </div>
        </div>
      </section>

      <section className="sectionPadding greenBg">
        <div className="maxWidth">
      {/* <div className="sectionRow">
      <h1>how it works</h1>
      </div> */}
        <div className="gridFour">
        <div className="block">
            <h2 className="gridSubtitle">The problem with digital art</h2>
          </div>
          <div className="block">
            <h2>Discover</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet pulvinar odio eget id et sed. Enim, nec, tincidunt vel leo, ac. Massa felis gravida proin est. Ac suspendisse ornare lacinia dictum massa velit quam pharetra id.</p>
          </div>
          <div className="block">
            <h2>Buy & Sell</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet pulvinar odio eget id et sed. Enim, nec, tincidunt vel leo, ac. Massa felis gravida proin est. Ac suspendisse ornare lacinia dictum massa velit quam pharetra id.</p>
          </div>
          <div className="block">
            <h2>Offset</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet pulvinar odio eget id et sed. Enim, nec, tincidunt vel leo, ac. Massa felis gravida proin est. Ac suspendisse ornare lacinia dictum massa velit quam pharetra id.</p>
          </div>
        </div>
        </div>
      </section>
      <section className="maxWidth sectionPadding">
    
        {/* <Card/> */}
        <CardRow/>
      </section>

      
    </div>
  );
}

export default Offsets;
