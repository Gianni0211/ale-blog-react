import { useState } from "react";
import { fold, Navigation, Route } from "react-tiger-transition";
import "react-tiger-transition/styles/main.min.css";
import "./App.css";
import Home from "./pages/Home/Home";
import PostDetail from "./pages/PostDetail/PostDetail";
import Posts from "./pages/Posts/Posts";
import PostsContext from "./store/PostsContext";


fold({
  name: "fold-top",
});

function App() {
  const [posts, setPosts] = useState([]);
  return (
    <PostsContext.Provider value={[posts, setPosts]}>
    <Navigation>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/posts">
        <Posts />
      </Route>
      <Route
        exact path="/post/:id"
        
      >
        <PostDetail />
      </Route>
    </Navigation>
    
    </PostsContext.Provider>
  );
}

export default App;
