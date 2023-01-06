import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { BsArrowBarLeft } from 'react-icons/bs';
import { forecastActions } from '../../store/forecast/forecastSlice';
import classes from './NavHeader.module.css';

const NavHeader = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const filterHandler = (e) => {
    const { value } = e.target;
    dispatch(forecastActions.updateSearch(value));
  };

  return (
    <>
      <nav>
        <Link to="/home" className={classes.logo}>
          Forecasty
        </Link>
        {location.pathname === '/home' ? (
          <div className={classes.search}>
            <input
              type="text"
              placeholder="Search by country name"
              onKeyUp={filterHandler}
            />
          </div>
        ) : (
          <Link to="/home" className={classes.goback}>
            <BsArrowBarLeft className={classes.icon} />
            Go back
          </Link>
        )}
      </nav>
    </>
  );
};

export default NavHeader;
