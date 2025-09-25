import Intro from "./components/intro/Intro"
import Skill from "./components/Skills/Skill"
import Works from "./components/Works/Works"
import Contacts from "./components/Contact/Contacts"
import Footer from "./components/footer/Footer"
import About from "./components/About/About"
import Navbar from "./components/navbar/Navbar"
import MYinfo from "./components/MYinfo/MYinfo"
import Certifications from "./components/Certifications/Certifications"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <MYinfo />
      <Skill />
      <Works />
      <Certifications />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App
