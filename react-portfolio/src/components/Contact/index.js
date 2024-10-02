import { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
      })
    })

    
    return (
        <>
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                    idx={15}
                />
                </h1>
                <p>
                    Estou interessado em oportunidade de PJ ou CLT - em grandes projetos.
                    Entretanto, se houver algum pedido ou pergunta não hesite em entrar em contato.
                </p>
                <div className='contact-form'>
                    <form>
                        <ul>
                            <li className="half">
                                <input type="text" name="name" placeholder="Name" required/>
                            </li>
                            <li className="half">
                                <input type="email" name="email" placeholder="E=mail" required/>
                            </li>
                            <li>
                                <input placeholder="Subjext" type="text" name="subject" required/>
                            </li>
                            <li>
                                <textarea placeholder="Message" name="message" required></textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>        
        <Loader type="pacman" />
        </>
    )
}


export default Contact