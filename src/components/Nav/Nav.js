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
          <Link to="/" transition="glide-top">
            <h4>Home</h4>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
