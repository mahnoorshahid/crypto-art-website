import './App.css';
import NavBar from './components/nav';
import Card from './components/card'
import CardRow from './components/cardRow'
import {BrowserRouter as Router,Route,Switch, Link} from 'react-router-dom';
import './index.css'

const discover = "/imgs/discover.png";
const buy = "./imgs/buy.png";
const footprint = "/imgs/footprint.png";

function Home() {
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
        <Link
          to ='/about'
          className="button"
        > 
          <div className="buttonText">
          Learn More
          </div>
          <span className="arrow">
          &rarr;
          </span>
        </Link>
      </header>
  
     
      <section className="sectionPadding">
      <div className="maxWidth">

      <div className="sectionRow">
      <h1>how it works</h1>
      </div>
        <div className="gridThree">
          <div className="block">
            <img src={discover} className="commonIcon"/>
            <h2>Discover</h2>
            <p>Explore from the tons of unique digital tokens from our online marketplace. We curate tokens that range from AR assets to the coolest images. Being a digital artist has never been more popular.</p>
          </div>
          <div className="block">
          <img src={buy} className="commonIcon"/>
            <h2>Buy & Sell</h2>
            <p>Found an artwork that speaks to you? Place a bid to purchase the offset. If you become an owner of a piece, you can resell when the item accumulates value.</p>
          </div>
          <div className="block">
          <img src={footprint} className="commonIcon"/>
            <h2>Offset</h2>
            <p>Our platform offers a solution to mitigate carbon emission in NFT transactions. Each each purchase, buyers must buy a small about of Carbon Offsets which helps fund eco-friendly projects.</p>
          </div>
        </div>
        </div>
      </section>


      <section className="maxWidth sectionPadding">
      <div className="sectionRow">
      <h1>Selected Bundles</h1>
      </div>
        {/* <Card/> */}
        <CardRow/>
      </section>

      
    </div>
  );
}

export default Home;
