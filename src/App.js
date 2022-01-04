import { useState , useEffect} from "react";
import { fold, Navigation, Route } from "react-tiger-transition";
import "react-tiger-transition/styles/main.min.css";
import "./App.css";
import Home from "./pages/Home/Home";
import PostDetail from "./pages/PostDetail/PostDetail";
import Posts from "./pages/Posts/Posts";
import Videos from "./pages/Videos/Videos";
import InitialDataContext from "./store/InitialDataContext";
import axios from 'axios'
import { STRAPI_BASE_URL } from "./consts/consts";



fold({
  name: "fold-top",
});

function App() {
  const [posts, setPosts] = useState([]);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchPosts();
    fetchVideos();
  }, [])

  const fetchPosts = () => {
    axios.get(`${STRAPI_BASE_URL}/posts`).then((resp) => {
      setPosts(resp.data)
    })
  }
  const fetchVideos = () => {
    axios.get(`${STRAPI_BASE_URL}/videos`).then((resp) => {
      setVideos(resp.data)
    }) 
  }
  return (
    
    <Navigation>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/posts">
        <Posts posts={posts} />
      </Route>
      <Route
        exact path="/post/:id"
        
      >
        <PostDetail />
      </Route>
      <Route exact path="/videos">
        <Videos videos={videos} />
      </Route>
    </Navigation>
    
    
  );
}

export default App;
