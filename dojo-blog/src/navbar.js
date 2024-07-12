import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <link to="/create">New Blog</link>
      </div>
    </nav>
  );
}
 
export default Navbar;