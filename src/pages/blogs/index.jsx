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
    allSanityPost(limit: 10) {
      nodes {
        title {
          en
          ja
        }
        slug {
          current
        }
        categories {
          title {
            en
            ja
          }
        }
        mainImage {
          asset {
            gatsbyImageData(
              fit: FILLMAX
              placeholder: DOMINANT_COLOR
              width: 400
              height: 250
            )
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
