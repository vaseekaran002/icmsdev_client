// material-ui
import logo from 'assets/images/logo.jpeg';
/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
    console.log('Logo');
    return <img src={logo} alt="Logo" width="100" />;
};

export default Logo;
