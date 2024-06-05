import logo from '../../assets/mithralogo.png';
import styles from './Styles/Logo.module.css';

const Logo = () => {
    return (
        <div className={styles.logo}>
            <img src={logo} alt="logo" />
        </div>
    );
};

export default Logo;