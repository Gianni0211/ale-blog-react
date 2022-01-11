import Nav from "../../components/Nav/Nav";
import "./Home.css";
import earth from "../../images/terra_AU.jpeg";

const Home = () => {
  return (
    <div className="home">
      <Nav />
      {/* <div className="title-wrapper">
        <Title size="400" text1="Arktista" text2="Unknown" open={true} />
      </div> */}
      <p className="home-text">
        The lie came to earth to deceive humanity , but before it saw that
        humanity is light, and it told the lie: <br /> “The humanity is light
        but they are ignorant; so I will dress like the truth, I will walk like
        the truth, I will speak like the truth and they will adore me ”. <br />
        Then the lie saw the truth and the lie prostrated itself before it!
      </p>
      <img src={earth} className="earth-img" alt="earth-img"></img>
    </div>
  );
};

export default Home;
