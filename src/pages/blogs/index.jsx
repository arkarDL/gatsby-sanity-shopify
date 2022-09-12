import Container from "../../layout/container"
import Grid from "../../components/grid"
import Card from "../../components/blogCard"
import React from "react"
import { graphql } from "gatsby"
const Blogs = ({ data }) => {
  const { allSanityPost } = data
  return (
    <Container>
      <h2 className="my-6 text-3xl font-bold">Latest Blogs</h2>
      <Grid>
        {allSanityPost.nodes.map((post, index) => (
          <Card key={index} data={post}></Card>
        ))}
      </Grid>
    </Container>
  )
}
export default Blogs
export const query = graphql`
  query BlogPageQuery($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      nodes {
        ns
        language
        id
        data
      }
    }
    allSanityPost(limit: 3) {
      nodes {
        title {
          en
          ja
        }
        categories {
          title {
            en
            ja
          }
        }
        description {
          en
          ja
        }
        body {
          en {
            _key
            _type
            style
            list
            _rawChildren
          }
          ja {
            _key
            _type
            style
            list
            _rawChildren
          }
        }
      }
    }
  }
`
