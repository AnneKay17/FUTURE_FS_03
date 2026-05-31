import './App.css'
import Reveal from './components/Reveal/Reveal'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Featured from './components/Featured/Featured'
import Footer from './components/Footer/Footer'
import Gallery from './components/Gallery/Gallery'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'


function App() {
  

  return (
    <>
      <Navbar/>
      <Home/>

      <Reveal>
        <Featured />
      </Reveal>

      <Reveal>
        <About />
      </Reveal>

      <Reveal>
        <Gallery />
      </Reveal>

      <Reveal>
        <Contact />
      </Reveal>

      <Footer />
    </>
  )
}

export default App
