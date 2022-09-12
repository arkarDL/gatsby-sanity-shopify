import Grid from "../components/grid"
import BlogCard from "../components/blogCard"
import ProductCard from "../components/productCard"
import { graphql } from "gatsby"
import React from "react"
import Container from "../layout/container"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"
const HomePage = (props) => {
  const { t } = useTranslation()
  console.log(props)
  return (
    <Container>
      <div className="mt-8">
        <h2 className="text-3xl font-bold mb-4">
          <Trans>{t(`Latest Products`)}</Trans>
        </h2>
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
export const query = graphql`
  query HomePageQuery($language: String!) {
    allLocale(filter: { language: { eq: $language } }) {
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
    allShopifyProduct(limit: 3) {
      nodes {
        title
        featuredImage {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`
