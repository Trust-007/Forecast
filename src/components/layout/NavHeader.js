import { useState } from "react";
import { useDispatch } from "react-redux";
import { forecastActions } from "../../store/forecast/forecastSlice";
import { Link, useLocation } from "react-router-dom";
import classes from "./NavHeader.module.css";
import { FcSearch } from "react-icons/fc";

const NavHeader = () => {
  const [getSearch, setGetSearch] = useState("");

  const dispatch = useDispatch();
  const location = useLocation();

  const getTextHandler = (e) => {
    const value = e.target.value;
    setGetSearch(value);
  };

  const filterHandler = () => {
    dispatch(forecastActions.updateSearch(getSearch));
  };

  return (
    <>
      <nav>
        <Link to="/home" className={classes.logo}>
          Forecasty
        </Link>
        {location.pathname === "/home" && (
          <div className={classes.search}>
            <input
              type="text"
              placeholder="Search by full country name"
              onChange={getTextHandler}
            />
            <button type="button" onClick={filterHandler}>
              <FcSearch className={classes.magnify} />
            </button>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavHeader;
