import ProductCard from "../components/ProductCard"

const ShoppingPage = () => {
  return (
    <div>
        
        <h1>ShoppingPage</h1>
        
        <hr className="mb-3" />
        
        {/* <ProductCard>
          
          <ProductCard.Image img='coffee-mug.png' />

          <ProductCard.Title title='Coffee Mug' />

          <ProductCard.Buttons increaseBy={function (value: number): void {
              throw new Error("Function not implemented.")
            } } counter={0}          
          />

        </ProductCard> */}

        <ProductCard product={{
          id: "1",
          title: "TITULO",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd4pqIhD4LnjET0toPVSQlEWk-rvKrVZUIdA&usqp=CAU"
        }}>
          
          <ProductCard.Image img='coffee-mug.png' />

          <ProductCard.Title  />

          <ProductCard.Buttons />

        </ProductCard>
        <ProductCard>
          
          <ProductCard.Image img='coffee-mug.png' />

          <ProductCard.Title  />

          <ProductCard.Buttons />

        </ProductCard>
        <ProductCard>
          
          <ProductCard.Image img='coffee-mug.png' />

          <ProductCard.Title  />

          <ProductCard.Buttons />

        </ProductCard>
        <ProductCard>
          
          <ProductCard.Image img='coffee-mug.png' />

          <ProductCard.Title  />

          <ProductCard.Buttons />

        </ProductCard>

    </div>
  )
}

export default ShoppingPage