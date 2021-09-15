import { Link } from "react-router-dom";
import footer from "./links.css";

const MainFooter = () => {
  return (
    <footer className="footer">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/orders">My Orders</Link>
          </li>
          <li>
            {" "}
            <Link to="/payments">Payment Options</Link>
          </li>
          <li>
            {" "}
            <Link to="/contact">Contact Info</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default MainFooter;
