import styles from './Header.module.css';

import igniteLogo from '../images/logo.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="imagem do logo" />
            <strong>Ignite feed</strong>
        </header>
    )
}