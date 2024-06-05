import { Link } from 'react-router-dom'
import './index.scss'

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Oi, <br /> Eu sou
                <img alt="Dedeveloper" />
                Thiago Murakami
                <br />
                Analista de dados
                </h1>
                <h2>Python | ETL | Power BI</h2>
                <Link to="/contact" className="flat-button">Entre em Contato</Link>
            </div>
        </div>
    )

}



export default Home