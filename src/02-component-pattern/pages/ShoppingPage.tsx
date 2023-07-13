import { useState } from "react"
import ProductCard from "../components/ProductCard"
import { OnChangeCard, Product, ProductCart } from "../types"

const products = [
  {
    id: "1",
    title: "taza 1",
    img: "coffee-mug.png"
  },
  {
    id: "2",
    title: "taza 2",
    img: "coffee-mug2.png"
  }
]
const ShoppingPage = () => {

  const [ cart , setCart ] = useState<ProductCart[]>([])

  const onProductChange : OnChangeCard = (args) => {
    
    console.log("Cambiado");
    
    console.log(args);

  }

  return (
    <div>

      <h1>ShoppingPage</h1>

      <hr className="mb-3" />

      <section className="row" style={{ width: "90%" , margin: 0 }} >
        
        {
          products.map( product => (
            <ProductCard
              className="bg-dark text-white col-2"
              onChange={onProductChange}
              key={product.id}
              product={product}
            >

              <ProductCard.Image className="card-img-top" img='coffee-mug.png' />

              <ProductCard.Title className="text-white mt-4" />

              <ProductCard.Buttons />

            </ProductCard>
          ))
        }

      </section>

      <div className="shooping-cart">
        
        <h5>Carrito</h5>

        <ProductCard
            className="bg-dark text-white"
            style={{
              width: "100px"
            }}
            product={{
              id: "1",
              title: "TITULO",
              img: "coffee-mug.png"
            }}
          >

            <ProductCard.Image className="card-img-top" img='coffee-mug.png' />

            <ProductCard.Buttons />

        </ProductCard>
      </div>

    </div>
  )
}

export default ShoppingPage