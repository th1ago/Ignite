import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LogoT from '../../assets/images/logo-t.png'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = ['h','i','a','g','o','','M', 'u', 'r', 'a', 'k', 'a', 'm', 'i']
    const jobArray = ['D','a','t','a',' ','A','n','a','l','i','t','i','c','s','.',]
    
  useEffect(() => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
    })
  })

    return (
      <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                  <span className={letterClass}>O</span>
                  <span className={`${letterClass} _12`}>i,</span>
                    <br />
                  <span className={`${letterClass} _13`}>Eu &nbsp;</span>
                  <span className={`${letterClass} _14`}>Sou</span>
                  <img src={LogoT} alt="Thiago" />
                  <AnimatedLetters letterClass={letterClass}
                      strArray={nameArray}
                      idx={15} />
                    <br />
                  <AnimatedLetters letterClass={letterClass}
                      strArray={jobArray}
                      idx={22} />
                </h1>
                <h2>Python | ETL | Power BI | AWS</h2>
                <Link to="/contact" className="flat-button">Entre em Contato</Link>
            </div>
        </div>
      </>
    )

}



export default Home