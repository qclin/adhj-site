import React, { useState } from "react"

import Layout from "../components/layout"
import ThemeNavigation from "../components/nav-themes"
import ProjectImages from "../components/project-images"
import Video from "../components/video"
import Research from "./research"

export default ({ pageContext: { project, images, media, captions } }) => {
  const captionObj = captions.reduce(
    (accumulator, target) => ({
      ...accumulator,
      [target.data.IMAGE_ID]: target.data.CAPTION,
    }),
    {}
  )
  const [showResearch, setShowResearch] = useState(false)
  const researchVideos = media.filter(item => item.data.IsResearch)
  const hasResearch = !media.isEmpty && researchVideos.length > 0
  const displayVideos = media.filter(item => !Boolean(item.data.IsResearch))
  return (
    <section className={showResearch ? "research projects" : "projects"}>
      <Layout>
        <ThemeNavigation
          selectedTheme={project.THEME}
          isProjectPage
          isMuted={showResearch}
        />
        {showResearch && (
          <Research project={project} videos={researchVideos} images={images} />
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
          <ProjectImages images={images} captions={captionObj} />
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
