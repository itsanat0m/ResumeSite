import { Route,Routes } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'
import MainPage from './mainPage/MainPage.tsx'
import './App.css'


function App() {

  return (
    <>
    <ParallaxProvider>
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </ParallaxProvider>
    </>
  )
}

export default App
