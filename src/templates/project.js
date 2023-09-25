import React, { useState, useRef } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import ThemeNavigation from "../components/nav-themes"
import ProjectImages from "../components/project-images"
import Video from "../components/video"
import Research from "./research"
import groupBy from "lodash/groupBy"; 
import clsx from 'clsx'; 

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
          vimeoID: { ne: null }
          PROJECT: { elemMatch: { data: { IDENTIFIER: { eq: $identifier } } } }
        }
      }
    ) {
      nodes {
        data {
          IsResearch
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

const ProjectPage =  ({ pageContext: { images }, data }) => {
  const titleHtml = useRef()
  const project = data.project.nodes[0].data
  const media = data.videos.nodes
  const [showResearch, setShowResearch] = useState(false)  

  const groupByMedia = groupBy(media, (item) => !Boolean(item.data.IsResearch) ? 'project' : 'research'); 
  const groupByImages = groupBy(images, (item) => item.Key.includes("Media") ? 'project' : 'research')

  const hasHeroVideo = groupByMedia.project.length > 0; 
  const hasResearch = 
    (!media.isEmpty && groupByMedia.research?.length > 0) || groupByImages.research?.length > 0

  const captions = keyByImageId(data.captions.nodes)
  
  return (
    <section
      className={showResearch ? "research projects" : "display projects"}
    >
      <Layout>
        <ThemeNavigation
          selectedTheme={project.THEME}
          isProjectPage
          isMuted={showResearch}
        />

        {hasHeroVideo && (
          <section className="full-height display-videos project-content">
            {groupByMedia.project.map(
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
        <header
          className={clsx(!hasHeroVideo && 'no-videos', "tc")}
          ref={titleHtml}
        >
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

        <section className="text-wrapper project-content">
          <div className="measure-wide text-block">
            <p className="description">{project.DESCRIPTION}</p>
            <p className="details">{project.DETAILS}</p>
          </div>
        </section>
        <section className="project-content pb4">
          <ProjectImages images={groupByImages.project} captions={captions} />
        </section>
        {showResearch && (
          <Research
            project={project}
            videos={groupByMedia.research}
            images={groupByImages.research}
          />
        )}
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


export default ProjectPage