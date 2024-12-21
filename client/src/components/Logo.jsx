import logo from '../assets/images/logo.png';

const Logo = () => {
  return <img src={logo} alt='jobify' className='logo' />;
};
export const SmallLogo = () => {
  return <img src={logo} alt='jobify' height={"50px"} className='logo' />;
};
export default Logo;
