import React from "react"
import ProjectImages from "../components/project-images"
import Video from "../components/video"

export default ({ project, videos, images }) => {
  return (
    <main>
      <div className="project-titles fixed tc pv3">
        {project.YEAR}
        <br />
        {project.TITLE}
      </div>
      <section className="pv6">
        <ProjectImages images={images} isResearch />
        <section className="mv4">
          {videos.map(
            item =>
              item.data.TYPE === "video" && (
                <Video
                  key={item.data.ID}
                  videoId={item.data.vimeoID}
                  videoTitle={item.data.ID}
                  count={videos.length}
                />
              )
          )}
        </section>
      </section>
      <h1 className="fixed">Research</h1>
    </main>
  )
}
