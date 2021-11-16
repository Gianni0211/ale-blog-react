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
    <Link className="card" transition="fold-top" to={`post/${id}`}>
      <div className="card-overlay">
      <div className="card-overlay-link" >Scopri di più</div>
      </div>
      {thumbnailUrl ? (imgUrl = thumbnailUrl) : imgUrl}
      <img
        className="card-img"
        alt="post-card-img"
        src="https://picsum.photos/200"
      />
      <div className="card-text-wrapper">
        <p className="card-title">{post.Title}</p>
        <p className="card-slug">{post.Slug}</p>
      </div>
    </Link>
  );
};

export default PostCard;
