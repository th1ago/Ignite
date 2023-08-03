import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale';

import { Comment } from './Comment';
import { Avatar } from './Avatar';

import styles from './Post.module.css';
import { useState } from 'react';
import { CodesandboxLogo } from 'phosphor-react';

export function Post({author, publishedAt, content}){
    //estado = quero que o componente monitore
    //quando quero que a varivel mude eu crio um estado  
    const [comments, setComments] = useState([
        1, 2, 3, 
    ])

    const [newCommentText, setNewCommentText] = useState('')

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
        setComments([...comments, newCommentText ])
        setNewCommentText('')
    };

    function handleNewCommentChange() {
        // elemento que esta recebendo aquele evento
        setNewCommentText(event.target.value)
    };

    function deleteComment(comment){
        console.log(`Deletetar ${comment}`)
    }

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
            {/* insere o key no primeiro elemento que aparecer no retorno do map */}
            {content.map(line => {
                if (line.type === 'paragraph') {
                    return <p key={line.content}>{line.content}</p>;
                } else if (line.type === 'link') {
                    return <p key={line.content}><a href="#">{line.content}</a></p>
                }
            })}
            </div>

            <form onSubmit={handleCreateNewComments} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    name="comment"
                    // o valor dela sempre sera deste estado
                    value={newCommentText}
                    placeholder='Deixe um comentario'
                    onChange={handleNewCommentChange}
                />
                
                <footer>
                    <button type="submit">Publish</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment 
                            key={comment}
                            content={comment}
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
        </article>
    )
}