import { useState } from 'react'  
import SignUpHeader from './components/SignUpHeader/SignUpHeader'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Features from './components/Features/Features'
import Offers from './components/Offers/Offers'
import DealOfDay from './components/DealOfDay/DealOfDay'
import Copun from './components/CopunByCategires/Copun'
import ImageWithText from './components/ImageWithText/ImageWithText'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SignUpHeader />
    <Navbar />
    <Home />
    <Features />
    <Offers />
    <DealOfDay />
    <Copun />
    <ImageWithText />
    {/* <Footer /> */}
    </>
  )
}

export default App
