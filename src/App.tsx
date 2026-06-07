import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import About from './components/About/About'

export const App = () => {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
      </main>
    </>
  )
}

export default App
