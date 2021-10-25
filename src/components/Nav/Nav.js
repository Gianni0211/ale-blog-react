import { bubble as Menu } from "react-burger-menu";
import { glide, Link } from "react-tiger-transition";
import "./Nav.css";
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
    <Menu right>
      <Link to="/" transition="cube-top">
        <p>Home</p>
      </Link>
      <Link transition="cube-top" to="/posts">
        <p>Posts</p>
      </Link>
    </Menu>
  );
};

export default Nav;
