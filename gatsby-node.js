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
              sizes
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
            YEAR
            TITLE
            IDENTIFIER
            THEME
            DESCRIPTION
            DETAILS
          }
          recordId
        }
      }

      videos: allAirtable(
        filter: { table: { eq: "VIDEOS" }, data: { Link: { ne: null } } }
      ) {
        nodes {
          data {
            IsResearch
            Link
            vimeoID
            TYPE
            ID
            PROJECT {
              data {
                IDENTIFIER
              }
            }
          }
        }
      }
    }
  `)

  const { images, projects, videos } = sourcedData.data

  projects.nodes.forEach(node => {
    let identifier = node.data.IDENTIFIER

    const projectImages = images.nodes.filter(image => {
      return image.Key.includes(identifier)
    })
    const projectMedia = videos.nodes.filter(video => {
      return video.data.PROJECT[0].data.IDENTIFIER == identifier
    })
    return createPage({
      path: `/projects/${identifier}`,
      component: require.resolve(`./src/templates/project.js`),
      context: {
        project: node.data,
        images: projectImages,
        media: projectMedia,
      },
    })
  })
}
