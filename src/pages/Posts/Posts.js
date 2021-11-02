import Nav from "../../components/Nav/Nav";
import PostCard from "../../components/PostCard/PostCard";
import "./Posts.css";

const Posts = () => {
  return (
    <div className="posts">
      <Nav />
      <div className="posts-wrapper">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
};

export default Posts;
