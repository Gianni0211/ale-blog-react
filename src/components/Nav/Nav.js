import { bubble as Menu } from "react-burger-menu";
import { Link } from "react-tiger-transition";
import "./Nav.css";

const Nav = () => {
  return (
    <Menu right>
      <Link to="/" transition="fold-top">
        <p>Home</p>
      </Link>
      <Link transition="fold-top" to="/posts">
        <p>Posts</p>
      </Link>
    </Menu>
  );
};

export default Nav;
