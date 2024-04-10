import { useLocation } from 'react-router-dom'
import './styles/searchResult.css'

export const SearchResult = () => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchParam = queryParams.get('search');
  console.log(searchParam)



  return (
    <section className="result-container">
      <article className="result-product">
        <div className='result-product-img'>
          <img src="https://http2.mlstatic.com/D_620616-MLA49003338062_022022-I.jpg" alt="result" />
        </div>
        <div className='result-product-data'>
          <h3>$1.500</h3>
          <p>Apple Ipod touch 5g 16gb negro igual a nuevo completo unico! </p>
        </div>
        <div className='result-product-location'>
          <span>Medellin</span>
        </div>
      </article>  
      <article className="result-product">
        <div className='result-product-img'>
          <img src="https://http2.mlstatic.com/D_620616-MLA49003338062_022022-I.jpg" alt="result" />
        </div>
        <div className='result-product-data'>
          <h3>$1.500</h3>
          <p>Apple Ipod touch 5g 16gb negro igual a nuevo completo unico! </p>
        </div>
        <div className='result-product-location'>
          <span>Medellin</span>
        </div>
      </article>  
    </section>
  )
}
