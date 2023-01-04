import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { FcSearch } from 'react-icons/fc';
import { forecastActions } from '../../store/forecast/forecastSlice';
import classes from './NavHeader.module.css';

const NavHeader = () => {
  const [getSearch, setGetSearch] = useState('');

  const dispatch = useDispatch();
  const location = useLocation();

  const getTextHandler = (e) => {
    const { value } = e.target;
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
        {location.pathname === '/home' && (
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
