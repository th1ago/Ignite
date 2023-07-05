import {Post} from './Post'
import {Header} from './components/Header'

import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <Post 
        author="Thiago Murakami"
        content="I am the new Data Analytics"
      />
    </div>
  )
}

export default App
