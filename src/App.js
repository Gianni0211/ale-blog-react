import { fold, Navigation, Route } from "react-tiger-transition";
import "react-tiger-transition/styles/main.min.css";
import "./App.css";
import Home from "./pages/Home/Home";
import Posts from "./pages/Posts/Posts";

fold({
  name: "fold-top",
});

function App() {
  return (
    <Navigation>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/posts">
        <Posts />
      </Route>
    </Navigation>
  );
}

export default App;
