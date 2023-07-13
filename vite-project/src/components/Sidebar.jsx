import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css';

export function Sidebar(){
    return (
        <>            
            <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1571757767119-68b8dbed8c97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="gundam" />
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/th1ago.png" alt="foto do profile" />
                <strong>Thiago Murakami</strong>
                <br />
                <span>Full Stack</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar perfil
                </a>
            </footer>
            </aside>
        </>
    )
}