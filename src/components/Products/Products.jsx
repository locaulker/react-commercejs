import React from "react"
import { Grid } from "@material-ui/core"
import Product from "./Product/Product"

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running Shoes",
    price: "$5",
    image: "../../assets/images/running-shoes.jpg",
  },
  {
    id: 2,
    name: "MacBook",
    description: "Apple MacBook",
    price: "$10",
    image:
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hY2Jvb2t8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
  },
]

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  )
}

export default Products
