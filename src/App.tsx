import { useState, useEffect } from "react"
import { useQuery } from "react-query"
// Components Material UI
import { Drawer, LinearProgress, Grid, Badge } from "@material-ui/core"
// import { AddShoppingCartIcon } from "@material-ui/icons"

// Custom components
import Product from "./components/Product/Product"

// Styles
import { AppWrapper } from "./App.styles"

// Types
export type ProductType = {
  id: number
  category: string
  description: string
  image: string
  price: number
  title: string
  amount: number
}

const getProducts = async (): Promise<ProductType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json()

const App = () => {
  // let [allPoducts, setAllProducts] = useState([])

  const { data, isLoading, error } = useQuery<ProductType[]>(
    "products",
    getProducts
    // {
    //   enabled: false,
    //   staleTime: Infinity,
    // }
  )

  console.log("data", data)

  const getTotalProducts = () => null
  const handleAddToCart = (clickedProduct: ProductType) => null
  const handleRemoveFromCart = () => null

  if (isLoading) return <LinearProgress />
  if (error) return <div>Error fatching data</div>

  return (
    <AppWrapper>
      <Grid container spacing={3}>
        {data?.map((product: ProductType) => (
          <Grid item key={product.id} xs={12} sm={4}>
            <Product product={product} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </AppWrapper>
  )
}

export default App
