import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale';

import { Comment } from './Comment';
import { Avatar } from './Avatar';

import styles from './Post.module.css';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface Author {
    name: string;
    role: string;
    avatar_url: string
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

export interface PostType {
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}

interface PostProps {
    post: PostType;
}

export function Post({post}: PostProps){
    //estado = quero que o componente monitore, quando quero que a varivel mude eu crio um estado
    //iniciar o estado com alguma info do mesmo tipo que vou amarzenar
    const [comments, setComments] = useState([
        "Post show de bola"
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(
        post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
            locale: ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(
        post.publishedAt, {
            locale: ptBR,
            addSuffix: true
    });

    // quando 'e uma acao do ususario comece a funcao com HANDLE 
    function handleCreateNewComments(event: FormEvent){
        // evitar redirecionar o usuario para outra pagina 
        event.preventDefault()
        setComments([...comments, newCommentText ])
        setNewCommentText('')
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        // permite ao user digitar e publicar
        event.target.setCustomValidity('')
        // elemento que esta recebendo aquele evento
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity("Esse campo e obrigatorio ")
    }

    function deleteComment(commentToDelete: string){
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment != commentToDelete
        })
        // nao se altera uma info, se cria uma nova info e salvando dentro do estado
        setComments(commentsWithoutDeletedOne);
    }

    const isNewCommentEmpty = newCommentText.length == 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src={post.author.avatar_url}/>
                    <div className={styles.authorinfo}>
                        <strong>{post.author.name} <br /></strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>
                {/* //O método toISOString() retorna a data no formato ISO */}
                <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
            {/* insere o key no primeiro elemento que aparecer no retorno do map */}
            {post.content.map(line => {
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
                    // o value dela sempre sera deste estado
                    value={newCommentText}
                    placeholder='Deixe um comentario'
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                
                <footer>
                    {/* desabilita o botao caso nao tenha nada escrito */}
                    <button type="submit" disabled={isNewCommentEmpty}>
                        Publish
                    </button>
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