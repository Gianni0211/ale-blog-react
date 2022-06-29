import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-tiger-transition";
import PostImage from "../../components/PostImage/PostImage";
import { STRAPI_BASE_URL } from "../../consts/consts";
import "./PostDetail.css";
const PostDetail = (props) => {
  const [post, setPost] = useState({});

  const { id } = useParams();

  // componentDidMount
  useEffect(() => {
    getCurrentPost(id);
  }, [id]);
  const getCurrentPost = (id) => {
    axios.get(`${STRAPI_BASE_URL}/posts/${id}`).then((resp) => {
      setPost(resp.data);
    });
  };
  const formatDate = (date) => {
    if (date) {
      let newDate = date.split("T")[0];
      return newDate.split("-").reverse().join("-");
    }
  };

  let category = "";
  let image;
  if (Object.keys(post).length > 0) {
    category = post.category?.name;
    image = post.Image?.formats?.medium.url;
  }
  console.log(image, " image");
  console.log(post.Image?.formats?.medium.url, " img da post");
  return (
    <div className="post-detail">
      <div className="exit-button-wrapper">
        <Link className="exit-button" transition="fold-top" to="/posts">
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </Link>
      </div>
      <div className="text-wrapper">
        <h1 className="detail-title">{post.Title}</h1>
        <PostImage image={image} />
        <p className="detail-text">{post.Text}</p>
      </div>
      <div className="detail-data-wrapper">
        <span className="data-detail">
          <strong>Data di pubblicazione:</strong>{" "}
          {formatDate(post.published_at)}
        </span>
        <span className="data-detail">
          <strong>Categoria:</strong> {category}
        </span>
      </div>
    </div>
  );
};

export default PostDetail;
