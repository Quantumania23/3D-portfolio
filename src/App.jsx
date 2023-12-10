import {Route, BrowseRouter as Router, Routes} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import {Home, About, Projects, Contact, Articles, Testimonials} from './Pages'

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/articles" element={<Articles/>}/>
          <Route path="/testimonials" element={<Testimonials/>}/>
        </Routes>
        <Footer/>
      </Router>
    </main>  
  )
}

export default App
