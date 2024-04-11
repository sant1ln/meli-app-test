import { AppRouter } from './Routes'
import { Navbar } from './components/Navbar'
import './App.css'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <main>
        <BrowserRouter>
          <Navbar />
          <div className='main-content'>
            <AppRouter />
          </div>
        </BrowserRouter>
    </main>
  )
}

export default App
