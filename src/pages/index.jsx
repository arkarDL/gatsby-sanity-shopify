import Grid from "../components/grid"
import BlogCard from "../components/blogCard"
import ProductCard from "../components/productCard"
import { graphql } from "gatsby"
import React from "react"
import Container from "../layout/container"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"
import { listItem } from "mdast-util-to-hast/lib/handlers/list-item"
const HomePage = ({ data }) => {
  const { allSanityPost, allShopifyProduct } = data
  const { t } = useTranslation()
  console.log(allShopifyProduct, allSanityPost)
  return (
    <Container>
      <div className="mt-8">
        <h2 className="mb-4 text-3xl font-bold">{t("Latest Products")}</h2>
        <Grid>
          {allShopifyProduct?.nodes?.map((itm, index) => (
            <ProductCard key={index} data={itm} />
          ))}
        </Grid>
      </div>
      <div className="mt-8">
        <h2 className="mb-4 text-3xl font-bold">
          <Trans>Latest Blogs</Trans>
        </h2>
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
