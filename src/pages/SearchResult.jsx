import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { BreadCrumb } from '../components/BreadCrumb';
import { Loader } from '../components/Loader';
import { printSimbol } from '../utils/utils';
import './styles/searchResult.scss'

export const SearchResult = () => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchParam = queryParams.get('search');

  const [products, setProducts] = useState({
    items: [],
    categories: [],
    loading: true,
    error: false, 
  })  

  useEffect(()=>{
    fetch(`http://localhost:3030/api/v1/items?q=${searchParam}`)
      .then((response)=> response.json())
      .then((data)=>{
        setProducts({
          items: data.items,
          categories: data.categories,
          loading: false,
          error: false
        }) 
      })    
  },[searchParam])

  if(products.loading){
    return <Loader />
  }

  return (
    <section className="result-container">
      {
        products.categories.map((value, index, array)=>(
          <span key={value.id}>
            <BreadCrumb  value={value.name} />
            {printSimbol(index,array)}
          </span>
        ))
      }
      {        
        products?.items?.map((value)=>(
        <Link to={`/item/${value.id}`} key={value.id}>
          <article className="result-product">
            <div className='result-product-img'>
              <img src={value.picture} alt={value.title} />
            </div>
            <div className='result-product-data'>
              <h3>{value.price.amount}.{value.price.decimals}</h3>
              <p>{value.title}</p>
            </div>
          </article>  
        </Link>
        ))
      }
    </section>
  )
}
