import { Link } from "react-tiger-transition";
import "./PostCard.css";

const PostCard = (props) => {
  const post = props.post;
  let thumbnailUrl = "";
  if (post.Image) {
    thumbnailUrl = post.Image.formats.thumbnail.url;
  }
  let imgUrl = "";
  let id = post.id

  return (
    <div className="card">
      <div className="overlay">
      <Link className="overlay-link" to={`post/${id}`}>Scopri di più</Link>
      </div>
      {thumbnailUrl ? (imgUrl = thumbnailUrl) : imgUrl}
      <img
        className="card-img"
        alt="post-card-img"
        src="https://picsum.photos/200"
      />
      <div className="text-wrapper">
        <p className="title">{post.Title}</p>
        <p className="slug">{post.Slug}</p>
      </div>
    </div>
  );
};

export default PostCard;
