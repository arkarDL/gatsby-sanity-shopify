import React from "react"
import Container from "../../layout/container"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { PortableText } from "@portabletext/react"

const Detail = ({ pageContext, data }) => {
  const article = data?.allSanityPost?.nodes[0]
  const language = pageContext?.i18n.language

  return (
    <Container>
      <div className="my-8 ">
        <h1
          className="font-bold my-4"
          style={{ fontSize: 28, textTransform: "capitalize" }}
        >
          {article.title[language]}
        </h1>
        <GatsbyImage
          image={article.mainImage.asset.gatsbyImageData}
          className="my-6"
        />
        <div className="prose">
          <PortableText value={article._rawBody[language]} />
        </div>
      </div>
    </Container>
  )
}
export default Detail

export const query = graphql`
  query FetchMetaData($pagePath: String!) {
    allSanityPost(filter: { slug: { current: { eq: $pagePath } } }) {
      nodes {
        slug {
          current
        }
        _rawBody
        title {
          en
          ja
        }
        mainImage {
          asset {
            gatsbyImageData(
              fit: FILLMAX
              placeholder: DOMINANT_COLOR
              width: 400
            )
          }
        }
      }
    }
  }
`
