import { Link } from "react-router-dom";
import classes from "./NavHeader.module.css";
import { IconName } from "react-icons/wi";

const NavHeader = () => (
  <>
    <nav>
      <Link to="/home" className={classes.logo}>
        BookStore cms
      </Link>
      <div>
        <input type="text" placeholder="Search" />
        <button type="button"></button>
      </div>
    </nav>
  </>
);

export default NavHeader;
