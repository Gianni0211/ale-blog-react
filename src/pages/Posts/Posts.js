import axios from "axios";
import { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import PostCard from "../../components/PostCard/PostCard";
import "./Posts.css";

const Posts = () => {
  const [currentPosts, setCurrentPosts] = useState([]);
  // componentDidMount
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    axios.get("http://localhost:1337/posts").then((resp) => {
      
      setCurrentPosts(resp.data);
    });
  };

  return (
    <div className="posts">
      <Nav />
      <div className="posts-wrapper">
        {currentPosts.map((post, i) => {
          return <PostCard key={i} post={post} />;
        })}
      </div>
    </div>
  );
};

export default Posts;
