import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Career from './components/Career/Career'
import ScrollToTop from './components/Atoms/ScrollToTop/ScrollToTop'
import Footer from './components/Footer/Footer'
import Project from './components/Project/Project'

import './App.scss'
import Contact from './components/Atoms/Contact/Contact'

export const App = () => {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Career />
        <Project />
        <Contact />
      </main>
      <ScrollToTop />
      <Footer />
    </>
  )
}

export default App
