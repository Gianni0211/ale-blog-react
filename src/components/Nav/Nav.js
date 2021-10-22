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
        <h4>Home</h4>
      </Link>
      <Link transition="cube-top" to="/posts">
        <h4>Posts</h4>
      </Link>
    </Menu>
  );
};

export default Nav;
