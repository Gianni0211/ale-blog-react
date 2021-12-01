import { Link } from 'react-tiger-transition'
import Thumbnail from '../Thumbnail/Thumbnail'
import './PostCard.css'

const PostCard = (props) => {
  const post = props.post
  let id = post.id

  return (
    <Link className="card" transition="fold-top" to={`post/${id}`}>
      <div className="card-overlay">
        <div className="card-overlay-link">Scopri di più</div>
      </div>
      <Thumbnail image={post.Image} />
      <div className="card-text-wrapper">
        <p className="card-title">{post.Title}</p>
        <p className="card-slug">{post.Slug}</p>
      </div>
    </Link>
  )
}

export default PostCard
