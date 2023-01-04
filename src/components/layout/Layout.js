import NavHeader from './NavHeader';
import classes from './Layout.module.css';

const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      <NavHeader />
      <div className={classes.container}>{children}</div>
    </div>
  );
};

export default Layout;
