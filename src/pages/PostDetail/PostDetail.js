import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-tiger-transition";
import "./PostDetail.css";
const PostDetail = (props) => {
  const [post, setPost] = useState({});
 

  const  {id}  = useParams();
  
  // componentDidMount
  useEffect(() => {
    getCurrentPost(id)
  
  }, []);
  const getCurrentPost = (id) => {
    axios.get(`http://localhost:1337/posts/${id}`).then((resp) => {
      setPost(resp.data)
      
    })
  }

  return (
    <div className="post-detail">
      <div className="exit-button-wrapper">
      <Link className="exit-button" transition="fold-top" to="/posts">
          <p>X</p>
        </Link>
      </div>
      <div className="text-wrapper">
      <h1 className="title">{post.Title}</h1>
      <p className="text">{post.Text}</p>
      </div>
    </div>
  )
}

export default PostDetail