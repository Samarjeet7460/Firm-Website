import Hero from "./web_components/Hero"
import Navbar from "./web_components/Navbar"
import Products from "./web_components/Products"
import Footer from "./web_components/Footer"
import Contact from "./web_components/Contact"
import About from "./web_components/About"

function App() {

  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <About/>
      <Products />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
