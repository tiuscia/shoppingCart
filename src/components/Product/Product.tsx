import { Button } from "@material-ui/core"

// Styles
import { ProductWrapper } from "./Product.styles"

// Types
import { ProductType } from "../../App"

type ProductProps = {
  product: ProductType
  handleAddToCart: (clickedProduct: ProductType) => void
}

const Product: React.FC<ProductProps> = ({ product, handleAddToCart }) => {
  return (
    <ProductWrapper>
      <img src={product.image} alt={product.title} />
      <div>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <span>${product.price}</span>
      </div>
      <Button onClick={() => handleAddToCart(product)}>Add to cart</Button>
    </ProductWrapper>
  )
}

export default Product
