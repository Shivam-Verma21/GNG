import './App.css'
import About from './components/About/About'
import Header from './components/Header/Header'
import Headline1 from './components/Headline/Headline1'
import Hero from './components/Hero/Hero'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import What_we_do from './components/What_we_do/What_we_do'
import Whatsapp from './components/Whatsapp/Whatsapp'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Headline1 />
      <What_we_do />
      <ScrollToTop />
      <Whatsapp />

      {/* <div className="font-awesome"></div> */}
      {/* <div style={{ color: 'red', fontSize: '20px', margin: '10px', backgroundColor: 'lightblue' }}>
        Inline styles in React!
      </div> */}
    </>
  )
}

export default App
