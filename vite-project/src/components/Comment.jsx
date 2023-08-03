import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({content, onDeleteComment}){

    function handleDeleteComment() {
        onDeleteComment(content)
    };

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
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}