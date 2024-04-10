import './styles/product.css';

export const Product = () => {
  return (
    <section className="product">
      <div className='product-data'>
        <div className='product-data-image'>
          <img src="https://http2.mlstatic.com/D_696564-MLA52130732644_102022-I.jpg" alt="" />
        </div>
        <div className='product-data-description'>
          <h3>Descripción del producto</h3>
          <p>
          Chip A15 Bionic superrápido. Una increíble duración de batería y una cámara que es una superestrella. Y además, el vidrio más resistente en un smartphone y botón de inicio con la seguridad de Touch ID. Aviso legal (1) El tamaño de la pantalla se mide en diagonal. (2) La duración de la batería varía según el uso y la configuración. (3) El iPhone SE (tercera generación) tiene una clasificación IP67 según la norma IEC 60529 (hasta 30 minutos a una profundidad máxima de 1 metro). La resistencia a las salpicaduras, al agua y al polvo no es una condición permanente, y podría disminuir como consecuencia del uso normal. No intentes cargar un iPhone mojado; consulta el manual del usuario para ver las instrucciones de limpieza y secado. La garantía no cubre daños producidos por líquidos. (4) Algunas funcionalidades podrían no estar disponibles en todos los países o áreas.
          </p>
          </div>
      </div>
      <div className='product-name'>
        <span className='product-name-status'>
          Nuevo - 234 vendidos
        </span>
        <h2 className='product-name-title'>Deco Reverse Sombrero Oxford</h2>
        <h2 className='product-name-price'>$1.980</h2>

        <input type="button" className='product-name-buy' value="Comprar"/>
      </div>
    </section>
  )
}
