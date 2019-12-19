import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Menu = () => {
  const data = useStaticQuery(graphql`
    query MenuQuery {
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

  return (
    <div>
      <h3>Projects</h3>

      <ul>
        {data.projects.nodes.map((item, i) => (
          <li key={item.recordId}>
            <p>
              {item.data.TITLE}, {item.data.YEAR}
            </p>
            <p>{item.data.DESCRIPTION}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Menu
