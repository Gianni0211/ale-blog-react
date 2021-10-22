import { glide, Link, Navigation, Route } from "react-tiger-transition";
import "react-tiger-transition/styles/main.min.css";
import "./App.css";
import Posts from "./pages/Posts/Posts";

glide({
  name: "glide-bottom",
  direction: "bottom",
});
glide({
  name: "glide-top",
  direction: "top",
});
const screenStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
function App() {
  return (
    <Navigation>
      <Route
        exact
        path="/"
        screen
        screenProps={{ style: { ...screenStyle, backgroundColor: "#A5817F" } }}
      >
        <Link transition="glide-top" to="/outside">
          <h4>outside</h4>
        </Link>
      </Route>
      <Route exact path="/outside">
        <Posts />
      </Route>
    </Navigation>
  );
}

export default App;
