import "./PostCard.css";

const PostCard = (props) => {
  const title = props.title;
  const slug = props.slug;
  const text = props.text;
  return (
    <div className="card">
      <div className="overlay">
        <a className="overlay-link">Scopri di più</a>
      </div>
      <img
        className="card-img"
        alt="post-card-img"
        src="https://picsum.photos/100"
      />
      <div className="text-wrapper">
        <p className="title">{title}</p>
        <p className="slug">{slug}</p>
      </div>
    </div>
  );
};

export default PostCard;
