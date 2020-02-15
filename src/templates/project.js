import React, { useState } from "react"

import Layout from "../components/layout"
import ThemeNavigation from "../components/nav-themes"
import ProjectImages from "../components/project-images" // moving to sub files with fragments
import Video from "../components/video"

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
  const displayVideos = media.filter(
    item => item.data.IsResearch === showResearch
  )
  console.log(media, hasResearch)
  return (
    <section className={showResearch ? "research projects" : "projects"}>
      <Layout>
        <ThemeNavigation
          selectedTheme={project.THEME}
          selectedProjectId={project.IDENTIFIER}
          isProjectPage
          muted={showResearch}
        />
        {showResearch && (
          <div className="project-titles">
            {project.YEAR}
            <br />
            {project.TITLE}
          </div>
        )}
        <section className="project-content pv6">
          <div className="relative">
            {hasResearch && (
              <label className="switch">
                <input
                  type="checkbox"
                  onClick={() => setShowResearch(!showResearch)}
                />
                <span className="slider round"></span>
              </label>
            )}
          </div>

          <ProjectImages images={images} captions={captionObj} />
          <section className="text-wrapper">
            <h1 className="tc mb4">
              {project.TITLE}, {project.YEAR}
            </h1>
            <p className="description measure">{project.DESCRIPTION}</p>
          </section>

          {!media.isEmpty && (
            <section className={showResearch ? "flex mv4" : "mv4"}>
              {displayVideos.map(
                item =>
                  item.data.TYPE === "video" && (
                    <Video
                      key={item.data.ID}
                      videoId={item.data.vimeoID}
                      videoTitle={item.data.ID}
                      count={displayVideos.length}
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
