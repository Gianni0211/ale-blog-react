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
      <Link transition="fold-top" to="/videos">
        <p>Videos</p>
      </Link>
      <a href="https://salty-taiga-14197.herokuapp.com/admin/auth/login" target="_blank" rel="noreferrer">Login</a>
    </Menu>
  );
};

export default Nav;
