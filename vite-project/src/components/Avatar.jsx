import styles from './Avatar.module.css';

// aplicando destruturacao
// passando um obj como param informando buscando somente as propriedades que vou usar

export function Avatar( {hasBorder = true, src}) {
    return(
        <div>
            <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={src} alt="foto" />
        </div>
    )
}