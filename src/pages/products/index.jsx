import Container from "../../layout/container"
import Grid from "../../components/grid"
import Card from "../../components/productCard"
import React from "react"

const Products = () => {
  return (
    <Container>
      <h2 className="text-3xl font-bold my-6">Latest Products</h2>
      <Grid>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </Grid>
    </Container>
  )
}
export default Products
