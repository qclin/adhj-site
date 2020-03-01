import React, { useState, useRef } from "react"
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
        }
      }
    }
    captions: allAirtable(
      filter: {
        table: { eq: "CAPTIONS" }
        data: {
          PROJECT: { elemMatch: { data: { IDENTIFIER: { eq: $identifier } } } }
        }
      }
    ) {
      nodes {
        data {
          CAPTION
          IMAGE_ID
        }
      }
    }
  }
`

export default ({ pageContext: { identifier, images }, data }) => {
  const titleHtml = useRef()
  const project = data.project.nodes[0].data
  const media = data.videos.nodes
  const [showResearch, setShowResearch] = useState(false)
  const [titleOffset, setTitleOffset] = useState()
  const researchVideos = media.filter(item => item.data.IsResearch)
  const displayVideos = media.filter(item => !Boolean(item.data.IsResearch))
  const displayImages = images.filter(item => item.Key.includes("Media"))
  const researchImages = images.filter(item => item.Key.includes("Research"))
  const hasResearch =
    (!media.isEmpty && researchVideos.length > 0) || researchImages.length > 0

  const captions = keyByImageId(data.captions.nodes)
  console.log(data.captions, captions)

  return (
    <section
      className={showResearch ? "research projects" : "display projects mv6"}
    >
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
        <section className="project-content">
          <ProjectImages images={displayImages} captions={captions} />
          {!media.isEmpty && (
            <section className="mv4 full-height display-videos">
              {displayVideos.map(
                item =>
                  item.data.TYPE === "video" && (
                    <div className="mv3" key={item.data.ID}>
                      <Video
                        key={item.data.ID}
                        videoId={item.data.vimeoID}
                        videoTitle={item.data.ID}
                      />
                    </div>
                  )
              )}
            </section>
          )}
        </section>
        <header className="tc" ref={titleHtml}>
          <h1>
            {project.TITLE}, {project.YEAR}
          </h1>
          {hasResearch && (
            <label className="switch">
              <input
                type="checkbox"
                onClick={() => {
                  setShowResearch(!showResearch)
                  if (!showResearch) {
                    window.scrollTo(0, 0)
                  }
                }}
              />
              <span className="slider round"></span>
            </label>
          )}
        </header>

        <section className="project-content pv5">
          <section className="text-wrapper">
            <div className="measure-wide text-block">
              <p className="description">{project.DESCRIPTION}</p>
              <p className="details">{project.DETAILS}</p>
            </div>
          </section>
        </section>
      </Layout>
    </section>
  )
}

function keyByImageId(array) {
  return array.reduce((acc, obj) => {
    var key = obj.data.IMAGE_ID
    acc[key] = obj.data
    return acc
  }, {})
}
