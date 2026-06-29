import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Career from './components/Career/Career'
import ScrollToTop from './components/Atoms/ScrollToTop/ScrollToTop'

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
    </>
  )
}

export default App
