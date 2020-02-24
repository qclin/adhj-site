import React, { useState } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import ThemeNavigation from "../components/nav-themes"
import ProjectImages from "../components/project-images"
import Video from "../components/video"
import Research from "./research"

export const query = graphql`
  query ProjectQuery($identifier: String!) {
    project: allAirtable(
      filter: {
        table: { eq: "PROJECTS" }
        data: { IDENTIFIER: { eq: $identifier } }
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
      filter: {
        table: { eq: "VIDEOS" }
        data: {
          Link: { ne: null }
          PROJECT: { elemMatch: { data: { IDENTIFIER: { eq: $identifier } } } }
        }
      }
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
`

export default ({ pageContext: { identifier, images }, data }) => {
  const project = data.project.nodes[0]
  const media = data.videos.nodes
  const [showResearch, setShowResearch] = useState(false)
  const researchVideos = media.filter(item => item.data.IsResearch)
  const displayVideos = media.filter(item => !Boolean(item.data.IsResearch))
  const displayImages = images.filter(item => item.Key.includes("Media"))
  const researchImages = images.filter(item => item.Key.includes("Research"))
  const hasResearch =
    (!media.isEmpty && researchVideos.length > 0) || researchImages.length > 0

  return (
    <section className={showResearch ? "research projects" : "projects"}>
      <Layout>
        <ThemeNavigation
          selectedTheme={project.THEME}
          isProjectPage
          isMuted={showResearch}
        />
        {showResearch && (
          <Research
            project={project}
            videos={researchVideos}
            images={researchImages}
          />
        )}
        {hasResearch && (
          <div className="fixed right-2 top-2">
            <label className="switch">
              <input
                type="checkbox"
                onClick={() => setShowResearch(!showResearch)}
              />
              <span className="slider round"></span>
            </label>
          </div>
        )}
        <section className="project-content pv6">
          <ProjectImages images={displayImages} />
          <section className="text-wrapper">
            <h1 className="tc mb4">
              {project.TITLE}, {project.YEAR}
            </h1>
            <div className="measure-wide text-block">
              <p className="description">{project.DESCRIPTION}</p>
              <p className="details">{project.DETAILS}</p>
            </div>
          </section>

          {!media.isEmpty && (
            <section className="mv4 full-height display-videos">
              {displayVideos.map(
                item =>
                  item.data.TYPE === "video" && (
                    <Video
                      key={item.data.ID}
                      videoId={item.data.vimeoID}
                      videoTitle={item.data.ID}
                    />
                  )
              )}
            </section>
          )}
        </section>
      </Layout>
    </section>
  )
}
