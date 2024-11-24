import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <nav className="app_navigation">
        <Link to="/" className="home_link">
          Home
        </Link>
        <Link to="/about" className="about_link">
          About
        </Link>
      </nav>
    </>
  );
};
