//See: https://www.gatsbyjs.org/docs/node-apis/

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const sourcedData = await graphql(`
    query {
      images: allS3ImageAsset(sort: { order: ASC, fields: Key }) {
        nodes {
          Key
          childImageSharp {
            fluid(sizes: "100") {
              src
              srcSet
              aspectRatio
            }
          }
          id
        }
      }
      projects: allAirtable(
        filter: {
          table: { eq: "PROJECTS" }
          data: { IDENTIFIER: { ne: null } }
        }
      ) {
        nodes {
          data {
            IDENTIFIER
          }
        }
      }
    }
  `)

  const { images, projects } = sourcedData.data

  projects.nodes.forEach(node => {
    const identifier = node.data.IDENTIFIER

    const projectImages = images.nodes.filter(image => {
      return image.Key.includes(identifier)
    })

    return createPage({
      path: `/projects/${identifier}`,
      component: require.resolve(`./src/templates/project.js`),
      context: {
        identifier: identifier,
        images: projectImages,
      },
    })
  })
}
