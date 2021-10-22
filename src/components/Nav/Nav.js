import { glide, Link } from "react-tiger-transition";
glide({
  name: "glide-bottom",
  direction: "bottom",
});
glide({
  name: "glide-top",
  direction: "top",
});
const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/" transition="cube-top">
            <h4>Home</h4>
          </Link>
        </li>
        <li>
          <Link transition="cube-top" to="/posts">
            <h4>Posts</h4>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
