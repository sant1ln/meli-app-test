import { useRoutes } from 'react-router-dom'
import { Home } from './pages/Home'
import { SearchResult } from './pages/SearchResult'
import { Product } from './pages/Product'

const Routes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/items',
      element: <SearchResult />
    },
    {
      path: '/item/:id',
      element: <Product />
    }
  ])

  return routes

}

export const AppRouter = () =>{
  return (
      <Routes />
  )  
}