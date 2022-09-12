const path = require(`path`)

exports.createPages = async function ({ actions, graphql }) {
  const { createPage } = actions
  const { data } = await graphql(`
    query AllBlogs {
      allSanityPost {
        nodes {
          slug {
            current
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
