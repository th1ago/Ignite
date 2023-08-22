import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentProps{
    content: string;
    onDeleteComment: (comment: string) => void;
}


export function Comment({content, onDeleteComment}: CommentProps){

    const[likeCount, setLike] = useState(0); 

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment(){
        //sempre que for atualizar uma info
        //e essa info depende do valor que ela tinha anteriormente
        //depende dela mesma
        setLike((state) => {
            return state + 1
        });
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/th1ago.png" alt=''/>
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