import './App.css'
import About from './Components/About Section/About'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home Section/Home'
import Skills from './Components/Skills Section/Skills'
import Project from './Components/Projects Section/Project'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
