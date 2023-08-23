import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

// ao inserir ? torna a propriedade opcional
interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
    hasBorder?: boolean;
}

// aplicando destruturacao
// passando um obj como param informando buscando somente as propriedades que vou usar
// ...props - spread operator
export function Avatar( {hasBorder = true, ...prosp}: AvatarProps) {
    return(
        <div>
            <img 
                className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
                {...prosp}
            />
        </div>
    )
}