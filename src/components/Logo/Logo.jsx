import { Link } from 'react-router-dom';
import logo from '../../assets/mithralogo.png';
import styles from './Styles/Logo.module.css';

const Logo = () => {
    return (
        <div className={styles.logo}>
            <Link to='/'><img src={logo} alt="logo" /></Link>
        </div>
    );
};

export default Logo;