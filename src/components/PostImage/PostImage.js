import { STRAPI_BASE_URL } from "../../consts/consts"

const PostImage = (props) => {

  let src = `${STRAPI_BASE_URL}${props.image}`
  
  return (
    <div>
      <img className="post-img" alt="post-img" src={src} />
    </div>
  )
}

export default PostImage