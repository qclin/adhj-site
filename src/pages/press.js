import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function() {
  const [show, setShow] = useState(false)
  const [pdf, setPDF] = useState("")

  const { press } = useStaticQuery(graphql`
    query pressQuery {
      press: allAirtable(
        filter: { table: { eq: "PRESS" }, data: { TITLE: { ne: null } } }
        sort: { fields: data___YEAR, order: DESC }
      ) {
        nodes {
          data {
            LINK
            TITLE
            AUTHOR
            PUBLISHER
            MONTH
            YEAR
            TYPE
          }
          recordId
        }
      }
    }
  `)

  return (
    <Layout>
      <main className="info-pages" id="news">
        <SEO title="News" />
        <section className="list-wrapper">
          {press.nodes.map((item, i) => (
            <div className="large-text mb4" key={item.recordId}>
              {item.data.TYPE === "link" ? (
                <a
                  className="measure"
                  href={item.data.LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.data.TITLE}
                </a>
              ) : (
                <button
                  className="measure tl no-style"
                  onClick={() => {
                    setPDF(item.data.LINK)
                    setShow(true)
                  }}
                >
                  {item.data.TITLE}
                </button>
              )}

              <div className="description">
                {item.data.AUTHOR} <i>{item.data.PUBLISHER}</i>.{"  "}
                <span>
                  {item.data.MONTH} {item.data.YEAR}
                </span>
              </div>
            </div>
          ))}
        </section>
        <section id="pdf-reader" className={show ? "show" : "hide"}>
          <button
            className="navigation close"
            onClick={() => {
              setShow(false)
              setPDF("")
            }}
          >
            X
          </button>
          <object
            data={`../../press-pdfs/${pdf}?#scrollbar=0&toolbar=0&navpanes=0`}
            type="application/pdf"
            width="100%"
            height="100%"
          >
            <p>
              <a
                href={`../../press-pdfs/${pdf}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                to the PDF!
              </a>
            </p>
          </object>
        </section>
      </main>
    </Layout>
  )
}
