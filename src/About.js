import './App.css';
import Card from './components/card'
import CardRow from './components/cardRow'
import styles from './index.css'

function About() {
  return (
    <div className={styles.App}>
      <header className="App-header sectionPadding maxWidth">
      <h1 className="header">
        <span>
        OUR NEW & IMPROVED {' '}  
        </span>
        <span>
        CREATIVE INDUSTRY {' '}  
        </span>
      </h1>
      </header>
  

         
      <section className="sectionPadding whiteBg">
        <div className="maxWidth">
        <div className="sectionRow">
      <h1>THE REASON</h1>
      </div>
        <div className="gridFour">
        <div className="block">
            <h2 className="gridSubtitle">The problem with digital art</h2>
          </div>
          <div className="block">
            <h2>Fungibility</h2>
            <p>In the digital art space, unique digital items such GIFs, MP3 and other pieces of art can be easily be replicated in mass without any attribution to the originator of the asset.</p>
          </div>
          <div className="block">
            <h2>Limitations</h2>
            <p>In the contemporary art market, much of the artist's success is in the hands of wealthy investors, curators, critics and galleries.</p>
          </div>
          <div className="block">
            <h2>Storage Space</h2>
            <p>Much of the art cannot be displayed at one time in a gallery;  making it more difficult for artists to sell their art in its physical form.</p>
          </div>
        </div>
        </div>
      </section>
      <section className="sectionPadding purpleBg">
        <div className="maxWidth">
        <div className="gridFour">
        <div className="block">
            <h2 className="gridSubtitle">WHAT ARE NFTS?</h2>
          </div>
          <div className="block">
            <h2>Scarce Tokens</h2>
            <p>NFTs are unique digital tokens that can range from collectables to Virtual Reality estate. Each NFT is verified for authenticity.</p>
          </div>
          <div className="block">
            <h2>Monetization</h2>
            <p>Artists can easily sell their work without the need of a gallery or auction house; allowing them to receive royalties and a large portion of the profit from resells.</p>
          </div>
          <div className="block">
            <h2>Trade</h2>
            <p>Collectors and buyers can bid for an NFT. As collectors buy and sell each piece, the value of the token increases.</p>
          </div>
        </div>
        </div>
      </section>

      <section className="sectionPadding greenBg">
        <div className="maxWidth">
        <div className="gridFour">
        <div className="block">
            <h2 className="gridSubtitle">HOW OFFSETS WORK</h2>
          </div>
          <div className="block">
            <h2>Purchase offsets</h2>
            <p>You select a number of Carbon Offset with every purchase.</p>
          </div>
          <div className="block">
            <h2>Choose project</h2>
            <p>Each Carbon Offset will remove 1 tonne of Carbon Dioxide Emission Equivalent by funding Eco-friendly organizations.</p>
          </div>
          <div className="block">
            <h2>Retire Credits</h2>
            <p>These organizations then “retire” the offset credits when the correct amount of carbon dioxide emissions are removed from the environment.</p>
          </div>
        </div>
        </div>
      </section>

      <section className="sectionPadding greyBg">
        <div className="maxWidth">
        <div className="gridFour">
        <div className="block">
            <h2 className="gridSubtitle">CRYPTO ART POSSIBILITIES</h2>
          </div>
          <div className="block">
            <h2>VR and AR assets</h2>
            <p>Creators can monetize and make virtual places and structures for games, VR and AR. The possibilities are endless.</p>
          </div>
          <div className="block">
            <h2> Domain Names</h2>
            <p>Have an interesting domain name idea? Unique domain names are also being minted, traded and sold on the blockchain network.</p>
          </div>
          <div className="block">
            <h2>Gaming Industry</h2>
            <p>As NFTs, game assets can now be stored, collected, traded and  introduced into different virtual game worlds.</p>
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

export default About;
