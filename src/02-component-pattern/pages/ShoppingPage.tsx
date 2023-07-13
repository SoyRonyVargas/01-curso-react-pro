import useShoppingCart from "../hooks/useShoppingCart"
import ProductCard from "../components/ProductCard"

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

  const { cart, onProductChange } = useShoppingCart()

  return (
    <div>

      {/* <pre className="text-white">
        {
          JSON.stringify(cart, null, 3)
        }
      </pre> */}

      <h1>ShoppingPage</h1>

      <hr className="mb-3" />

      <section className="row" style={{ width: "90%", margin: 0 }} >

        {
          products.map(product => (
            <ProductCard
              className="bg-dark text-white col-2"
              onChange={onProductChange}
              key={product.id}
              product={product}
              value={cart.find(p => p.product.id === product.id)?.count ?? 0}
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

        {
          cart.map(p => (
            <ProductCard
              className="bg-dark text-white"
              style={{
                width: "100px"
              }}
              onChange={onProductChange}
              product={p.product}
              value={p.count}
            >

              <ProductCard.Image className="card-img-top" img='coffee-mug.png' />

              <ProductCard.Buttons />

            </ProductCard>
          ))
        }
      </div>

    </div>
  )
}

export default ShoppingPage