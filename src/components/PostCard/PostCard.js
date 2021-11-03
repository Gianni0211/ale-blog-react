import "./PostCard.css";

const PostCard = (props) => {
  const post = props.post;
  let thumbnailUrl = "";
  if (post.Image) {
    thumbnailUrl = post.Image.formats.thumbnail.url;
  }

  return (
    <div className="card">
      <div className="overlay">
        <a className="overlay-link">Scopri di più</a>
      </div>
      <img className="card-img" alt="post-card-img" src={thumbnailUrl} />
      <div className="text-wrapper">
        <p className="title">{post.Title}</p>
        <p className="slug">{post.Slug}</p>
      </div>
    </div>
  );
};

export default PostCard;
