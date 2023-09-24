import React from "react"
import ProjectImages from "../components/project-images"
import Video from "../components/video"

const ResearchPage = ({ project, videos, images }) => {
  return (
    <main>
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
                  isResearch
                />
              )
          )}
        </section>
      </section>
      <h1 className="research-title">Research</h1>
    </main>
  )
}


export default ResearchPage