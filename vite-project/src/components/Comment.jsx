import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

import { useState } from 'react';

export function Comment({content, onDeleteComment}){

    const[likeCount, setLike] = useState(0); 

    function handleDeleteComment() {
        onDeleteComment(content)
    };

    function handleLikeComment(){
        //sempre que for atualizar uma info
        //e essa info depende do valor que ela tinha anteriormente
        //depende dela mesma
        setLike((stateLike) => {
            return likeCount + 1
        });
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/th1ago.png"/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <time 
                                title="11 de Maio às 08:13h" 
                                dateTime="2022-05-11 08:13:00">
                                    Cerda de 1h
                            </time>
                        </div>
                        <button 
                            onClick={handleDeleteComment}
                            title='Deletar comentario'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}