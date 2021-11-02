import axios from "axios";
import Nav from "../../components/Nav/Nav";
import PostCard from "../../components/PostCard/PostCard";
import "./Posts.css";

const Posts = () => {
  let fetchedPosts = [];
  axios({
    method: "get",
    url: "http://localhost:1337/posts",
    "Content-type": "application/json",
  }).then((resp) => {
    fetchedPosts.push(resp.data);
  });
  console.log(fetchedPosts);
  let renderedPosts = fetchedPosts.map((post) => {
    return <PostCard title={post.Tile} slug={post.Slug} />;
  });

  return (
    <div className="posts">
      <Nav />
      <div className="posts-wrapper">{renderedPosts}</div>
    </div>
  );
};

export default Posts;
