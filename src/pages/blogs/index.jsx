import Container from "../../layout/container"
import Grid from "../../components/grid"
import Card from "../../components/blogCard"
import React from "react"

const Blogs = () => {
  return (
    <Container>
      <h2 className="text-3xl font-bold my-6">Latest Blogs</h2>
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
export default Blogs
