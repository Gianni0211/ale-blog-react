import { STRAPI_BASE_URL } from "../../consts/consts";
import "./Thumbnail.css";

const Thumbnail = (props) => {
  /* console.log(props.image.formats.thumbnail.url) */
  let hasImage = props.image ? true : false;

  let src = "";
  hasImage
    ? (src = `${props.image.formats.thumbnail.url}`)
    : (src = "https://via.placeholder.com/200");

  return (
    <div>
      <img className="card-img" alt="post-card-img" src={src} />
    </div>
  );
};

export default Thumbnail;
