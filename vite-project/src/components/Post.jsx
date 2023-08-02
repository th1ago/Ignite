import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale';

import { Comment } from './Comment';
import { Avatar } from './Avatar';

import styles from './Post.module.css';
import { useState } from 'react';

export function Post({author, publishedAt, content}){
    const [comments, setComments] = useState([
        1, 2, 
    ])

    const publishedDateFormatted = format(
        publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
            locale: ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(
        publishedAt, {
            locale: ptBR,
            addSuffix: true
    });

    // quando 'e uma acao do ususario comece a funcao com Handle 
    function handleCreateNewComments(){
        // evitar redirecionar o usuario para outra pagina 
        event.preventDefault()
        // elemento que esta recebendo aquele evento
        const newCommentText = event.target.comment.value

        setComments([...comments, newCommentText ])
    };

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src={author.avatar_url}/>
                    <div className={styles.authorinfo}>
                        <strong>{author.name} <br /></strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                {/* //O método toISOString() retorna a data no formato ISO */}
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
            {content.map(line => {
                if (line.type === 'paragraph') {
                    return <p>{line.content}</p>;
                } else if (line.type === 'link') {
                    return <p><a href="#">{line.content}</a></p>
                }
            })}
            </div>

            <form onSubmit={handleCreateNewComments} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea name="comment" placeholder='Deixe um comentario' />
                
                <footer>
                    <button type="submit">Publish</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment comment={comment}/>
                })}
            </div>
        </article>
    )
}