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
      projects: allAirtable(
        filter: {
          table: { eq: "PROJECTS" }
          data: { IDENTIFIER: { ne: null } }
        }
        sort: { fields: data___YEAR, order: DESC }
      ) {
        nodes {
          data {
            IDENTIFIER
            THEME
            DESCRIPTION
            TITLE
            YEAR
          }
          recordId
        }
      }
    }
  `)

  const { images, projects } = sourcedData.data
  projects.nodes.forEach(project => {
    const projectImages = images.nodes.filter(image => {
      return image.Key.includes(project.data.IDENTIFIER)
    })

    return createPage({
      path: `/projects/${project.recordId}`,
      component: require.resolve(`./src/templates/project.js`),
      context: { project: project.data, images: projectImages },
    })
  })
}
