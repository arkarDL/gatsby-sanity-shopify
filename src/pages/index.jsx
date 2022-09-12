import Grid from "../components/grid"
import BlogCard from "../components/blogCard"
import ProductCard from "../components/productCard"
import Header from "../components/header"
import React from "react"
import Container from "../layout/container"
const HomePage = () => {
  return (
    <Container>
      <div className="mt-8">
        <h2 className="text-3xl font-bold mb-4">Latest Products</h2>
        <Grid>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
        </Grid>
      </div>
      <div className="mt-8">
        <h2 className="text-3xl font-bold mb-4">Latest Blogs</h2>
        <Grid>
          <BlogCard></BlogCard>
          <BlogCard></BlogCard>
          <BlogCard></BlogCard>
        </Grid>
      </div>
    </Container>
  )
}

export default HomePage
