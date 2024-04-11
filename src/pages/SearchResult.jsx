import { Link, useLocation } from 'react-router-dom'
import './styles/searchResult.css'
import { useContext, useEffect, useState } from 'react';
import { BreadCrumb } from '../components/BreadCrumb';
import { MainContext } from '../context/main/MainContext';
import { types } from '../types/types';
import { Loader } from '../components/Loader';

export const SearchResult = () => {

  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const searchParam = queryParams.get('search');
  
  const [result, setResult] = useState([])
  const [categories, setCategories] = useState([])
  

  useEffect(()=>{
    fetch(`http://localhost:3030/api/v1/items?q=${searchParam}`)
      .then((response)=> response.json())
      .then((data)=>{ 
        setCategories(data.categories)
        setResult(data.items)
      })
  },[searchParam])

  const printSimbol = (index) => {
    if(index < categories.length - 1){
      return ' >'
    }
  }

  if(result.length === 0){
    return <Loader />
  }

  return (
    <section className="result-container">
      {
        categories.map((value, index)=>(
          <span key={value.id}>
            <BreadCrumb  value={value.name} />
            {printSimbol(index)}
          </span>
        ))
      }
      {        
        result.map((value)=>(
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
