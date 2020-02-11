//See: https://www.gatsbyjs.org/docs/node-apis/

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const sourcedData = await graphql(`
    query {
      images: allS3ImageAsset(sort: { order: ASC, fields: Key }) {
        nodes {
          Key
          childImageSharp {
            id
            fluid {
              aspectRatio
              src
              srcSet
              sizes
            }
          }
        }
      }
      projects: allAirtable(filter: { table: { eq: "PROJECTS" } }) {
        nodes {
          data {
            YEAR
            TITLE
            IDENTIFIER
            THEME
            DESCRIPTION
          }
          recordId
        }
      }
    }
  `)

  const { images, projects } = sourcedData.data
  projects.nodes.forEach(node => {
    const projectImages = images.nodes.filter(image => {
      return image.Key.includes(node.data.IDENTIFIER)
    })

    return createPage({
      path: `/projects/${node.data.IDENTIFIER}`,
      component: require.resolve(`./src/templates/project.js`),
      context: {
        project: node.data,
        images: projectImages,
      },
    })
  })
}
