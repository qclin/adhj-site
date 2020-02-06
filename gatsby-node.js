//See: https://www.gatsbyjs.org/docs/node-apis/

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const projectData = await graphql(`
    query {
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
  console.log(JSON.stringify(projectData, null, 4))

  projectData.data.projects.nodes.forEach(project => {
    createPage({
      path: `/projects/${project.recordId}`,
      component: require.resolve(`./src/templates/project.js`),
      context: { project: project.data },
    })
  })
}
