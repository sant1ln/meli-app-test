import { AppRouter } from './Routes'
import { MainProvider } from './context/main/MainProvider'

function App() {

  return (
    <main>
        <MainProvider>       
          <AppRouter />
        </MainProvider>
    </main>
  )
}

export default App
