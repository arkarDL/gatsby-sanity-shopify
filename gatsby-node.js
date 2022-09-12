exports.createPages = async function ({ actions, graphql }) {
  const { createPage } = actions
  const { data } = await graphql(`
    query AllBlogs {
      allSanityPost {
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
  `)
  const {
    allSanityPost: { nodes },
  } = data
  const blogPostTemplate = path.resolve(`./src/templates/detail/index.jsx`)
  nodes.forEach((node) => {
    const path = node?.slug?.current
    createPage({
      path,
      component: blogPostTemplate,

      context: {
        pagePath: path,
      },
    })
  })
}
