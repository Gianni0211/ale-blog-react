
import Nav from '../../components/Nav/Nav'
import PostCard from '../../components/PostCard/PostCard'

import './Posts.css'

const Posts = (props) => {
  const posts = props.posts
/*   const [currentPosts, setCurrentPosts] = useState([]) */
  // componentDidMount
/*   useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = () => {
    axios.get(`${STRAPI_BASE_URL}/posts`).then((resp) => {
      setCurrentPosts(resp.data)
    })
  } */

  return (
    <div className="posts">
      <Nav />
      <div className="posts-wrapper">
        {posts.map((post, i) => {
          return <PostCard key={i} post={post} />
        })}
      </div>
    </div>
  )
}

export default Posts
