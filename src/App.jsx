import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home' 
import Projects from './pages/Projects'
import Skill from './pages/Skill'
import Statistics from './pages/Statistics'

function App() {
  

  return (
    <>
       <Navbar/>
       <Home/>
       <About/>
       <Skill/>
       <Projects/>
       <Statistics/>
       <Contact/>
   
      
    </>
  )
}

export default App
