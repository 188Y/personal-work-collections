import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import LanguageProvider from "./i18n/LanguageProvider"

/** Root app layout composing all portfolio sections */
const App = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
