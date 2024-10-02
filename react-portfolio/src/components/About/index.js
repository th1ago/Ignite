import { useEffect, useState } from 'react'
import './index.scss'
import {
    faPython,
    faFigma,
    faGitAlt,
    faDocker,
    faAws,
  } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
      })
    })

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    Profissional com 10 anos de experiência nas áreas contábil e financeira
                    onde pude atuar em empresas multinacionais. Forte atuação no desenvolvimento de ERP,
                    inovação e também na sustentação dos processos com objetivo de gerar mais resultados
                    e diminuir gastos.
                </p>
                <p align="LEFT">
                    Tenho espírito de produto de alta qualidade. Gosto de trabalhar em equipe 
                    porque me dá a oportunidade de obter diferentes perspectivas de trabalho
                    e aprender sobre coisas novas.
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faPython} color="#EFD81D"/>
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faDocker} color="#4169E1" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faFigma} color="#FFFFFF" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faAws} color="#FFA500" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faDatabase} color="#000000" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About