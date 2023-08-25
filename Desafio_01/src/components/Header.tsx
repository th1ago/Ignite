import style from './Header.module.css'
import toDoLogo from '../assets/react.svg'

export function Header(){
    return(
        <header className={style.header}>
            <img src={toDoLogo} alt="Logo toDo" />
            <strong>ToDo</strong>
        </header>
    )
}