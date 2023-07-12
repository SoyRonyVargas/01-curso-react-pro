import ProductCard from "../components/ProductCard"

const ShoppingPage = () => {
  return (
    <div>

      <h1>ShoppingPage</h1>

      <hr className="mb-3" />

      <section className="row" style={{ width: "90%" , margin: 0 }} >
        
        <ProductCard
          className="bg-dark text-white"
          product={{
            id: "1",
            title: "TITULO",
            img: "https://static.wikia.nocookie.net/creatorpedia/images/e/e7/Joji.png"
          }}
        >

          <ProductCard.Image className="card-img-top" img='coffee-mug.png' />

          <ProductCard.Title className="text-white mt-4" />

          <ProductCard.Buttons />

        </ProductCard>

        <ProductCard>

          <ProductCard.Image img='coffee-mug.png' />

          <ProductCard.Title />

          <ProductCard.Buttons />

        </ProductCard>
        <ProductCard>

          <ProductCard.Image img='coffee-mug.png' />

          <ProductCard.Title />

          <ProductCard.Buttons />

        </ProductCard>
        <ProductCard>

          <ProductCard.Image img='coffee-mug.png' />

          <ProductCard.Title />

          <ProductCard.Buttons />

        </ProductCard>
        <ProductCard>

          <ProductCard.Image img='coffee-mug.png' />

          <ProductCard.Title />

          <ProductCard.Buttons />

        </ProductCard>
        <ProductCard>

          <ProductCard.Image img='coffee-mug.png' />

          <ProductCard.Title />

          <ProductCard.Buttons />

        </ProductCard>
        <ProductCard>

          <ProductCard.Image img='coffee-mug.png' />

          <ProductCard.Title />

          <ProductCard.Buttons />

        </ProductCard>
        <ProductCard>

          <ProductCard.Image img='coffee-mug.png' />

          <ProductCard.Title />

          <ProductCard.Buttons />

        </ProductCard>

      </section>

    </div>
  )
}

export default ShoppingPage