import siteLogo from '@/assets/investment-calculator-logo.png';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.root}>
      <img src={siteLogo} alt='Site logo with money bag' />
      <h1>Investment Calculator</h1>
    </header>
  );
}
