import Title from "react-titles/Title3";
import Nav from "../../components/Nav/Nav";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Nav />
      <div className="title-wrapper">
        <Title size="400" text1="Alejandro" open={true} />
      </div>
    </div>
  );
};

export default Home;
