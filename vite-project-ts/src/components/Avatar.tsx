import styles from './Avatar.module.css';

// ao inserir ? torna a propriedade opcional
interface AvatarProps {
    hasBorder: boolean;
    src: string;
    alt?: string
}

// aplicando destruturacao
// passando um obj como param informando buscando somente as propriedades que vou usar
export function Avatar( {hasBorder = true, src}: AvatarProps) {
    return(
        <div>
            <img 
                className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
                src={src} 
                alt="foto" 
            />
        </div>
    )
}