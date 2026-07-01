import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Career from './components/Career/Career'
import ScrollToTop from './components/Atoms/ScrollToTop/ScrollToTop'
import Footer from './components/Footer/Footer'

export const App = () => {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Career />
      </main>
      <ScrollToTop />
      <Footer />
    </>
  )
}

export default App
