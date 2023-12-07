import {Route, BrowseRouter as Router, Routes} from 'react-dom'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={'Home'}/>
          <Route path="/about" element={'About'}/>
          <Route path="/projects" element={'Projcts'}/>
          <Route path="/contact" element={'Contact'}/>
          <Route path="/articles" element={'Articles'}/>
          <Route path="/testimonials" element={'Testimonials'}/>
        </Routes>
      </Router>
    </main>  
  )
}

export default App
