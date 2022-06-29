import { STRAPI_BASE_URL } from "../../consts/consts";

const PostImage = (props) => {
  let src = `${props.image}`;

  return (
    <div>
      <img className="post-img" alt="post-img" src={src} />
    </div>
  );
};

export default PostImage;
