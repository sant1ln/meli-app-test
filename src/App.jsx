import { AppRouter } from './Routes'
import { Navbar } from './components/Navbar'
import { MainProvider } from './context/main/MainProvider'
import './App.css'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <main>
      <MainProvider>
        <BrowserRouter>
          <Navbar />
          <div className='main-content'>
            <AppRouter />
          </div>
        </BrowserRouter>
      </MainProvider>
    </main>
  )
}

export default App
