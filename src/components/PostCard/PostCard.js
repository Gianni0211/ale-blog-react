import "./PostCard.css";

const PostCard = (props) => {
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
        <p className="title">titolo</p>
        <p className="slug">
          slug lungo per placeholder per poter vedere se funziona in qualche
          modo
        </p>
        {/* <button className="cta">Scopri di piu</button> */}
      </div>
    </div>
  );
};

export default PostCard;
