import './App.css'
import Header from './components/Header/Header'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Whatsapp from './components/Whatsapp/Whatsapp'

function App() {
  return (
    <>
      <Header />
      <ScrollToTop/>
      <Whatsapp/>

      {/* <div className="font-awesome"></div> */}
      {/* <div style={{ color: 'red', fontSize: '20px', margin: '10px', backgroundColor: 'lightblue' }}>
        Inline styles in React!
      </div> */}
    </>
  )
}

export default App
