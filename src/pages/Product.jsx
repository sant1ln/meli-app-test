import { useParams} from 'react-router-dom'
import './styles/product.css';
import { useEffect, useState } from 'react';
import { formatValueToCurrency, printSimbol } from '../utils/utils';
import { BreadCrumb } from '../components/BreadCrumb';
import { Loader } from '../components/Loader';

export const Product = () => {

  const [product, setProduct] = useState({
    item: {},
    categories: [],
    loading: true,
  })

  const {id} = useParams();
  useEffect(()=>{
    fetch(`http://localhost:3030/api/v1/items/${id}`)
      .then((response)=> response.json())
      .then((data)=>{ 
        setProduct({
         item: data.item,
         categories: data.categories,
         loading: false
        })        
      })
  },[])

  if(product.loading){
    return <Loader />
  }

  return (
    <>
    {
     product?.categories?.map((value, index,array)=>(
        <span key={value.id}>
          <BreadCrumb  value={value.name} />
          {printSimbol(index, array)}
        </span>
      ))
    }
    <section className="product">
      <div className='product-data'>
        <div className='product-data-image'>
          <img src={product.item.picture} alt={'Imagen de producto' + product.item.title} />
        </div>
        <div className='product-data-description'>
          <h3>Descripción del producto</h3>
          <p>
           {product.item.description}
          </p>
          </div>
      </div>
      <div className='product-name'>
        <span className='product-name-status'>
          {product.item.condition} - {product.item.sold_quantity} vendidos
        </span>
        <h2 className='product-name-title'>{product.item.title}</h2>
        <h2 className='product-name-price'>{formatValueToCurrency(product.item.price?.amount ,product.item.price?.decimals)}</h2>

        <input type="button" className='product-name-buy' value="Comprar"/>
      </div>
    </section>
    </>
  )
}
