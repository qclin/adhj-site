import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <main className="info-pages">
      <Link className="navigation" to="/">
        H
      </Link>
      <SEO title="ABOUT" />
      <section className="pa5">
        <p className="measure-wide large-text">
          Transience and transformation are the central themes in the work of
          Anne Duk Hee Jordan. Through movement and performance, Jordan gives
          materiality another dimension - she builds motorized sculptures and
          creates edible landscapes. Her sculptures are intended to draw the
          viewer into the present and open a dialogue between natural phenomena,
          philosophy and art. Her work is like an interactive fantasy play with
          the knowledge and theories about the world and our souls. In the
          absence of concrete knowledge, fantasy runs riot. Jordan opens up
          doors to a universe where she humorously and romantically creates
          machines that juxtapose robotic consciousness with organic cyclic
          decay and life. She asks questions about an »agency« and encourages a
          change of perspective. She shifts the focus away from humans towards
          the entire ecology.
        </p>
        <p className="mv3 description">
          text by{" "}
          <a
            href="https://paulinedoutreluingne.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pauline Doutreluingne
          </a>
        </p>
      </section>
      <footer className="fixed bottom-2 left-2">
        © {new Date().getFullYear()}, Built by{" "}
        <a href="https://theholding.page">Studio hold</a>
      </footer>
    </main>
  </Layout>
)

export default AboutPage
