import Container from "../../layout/container"
import Grid from "../../components/grid"
import Card from "../../components/productCard"
import { graphql } from "gatsby"
import React from "react"
import { Trans, useTranslation, useI18next } from "gatsby-plugin-react-i18next"
const Products = ({ data }) => {
  const { allShopifyProduct } = data
  const { languages, changeLanguage } = useI18next()
  return (
    <Container>
      <h2 className="my-6 text-3xl font-bold">
        <Trans>Latest Products</Trans>
      </h2>
      <Grid>
        {allShopifyProduct?.nodes?.map((itm, index) => (
          <Card key={index} data={itm} />
        ))}
      </Grid>
    </Container>
  )
}
export default Products
export const query = graphql`
  query ProductPageQuery($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      nodes {
        ns
        language
        id
        data
      }
    }

    allShopifyProduct {
      nodes {
        title
        featuredImage {
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 200
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
`
