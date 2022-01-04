import Title from "react-titles/Title6";
import Nav from "../../components/Nav/Nav";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Nav />
      <div className="title-wrapper">
        <Title size="400" text1="Arktista" text2="Unknown" open={true} />
      </div>
    </div>
  );
};

export default Home;
