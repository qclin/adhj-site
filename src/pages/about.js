import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <main className="info-pages">
      <SEO title="ABOUT" />
      <section className="pa5">
        <p className="measure large-text">
          <Link className="navigation" to="/">
            Anne Duk Hee Jordan
          </Link>
          opens up doors to an artistic universe where she, humorously creates
          romantic machines that mirror, extend or convert biological processes
          and chemical reactions between living organisms and dead material.
        </p>
        <p className="measure large-text">
          In her work she explores the flow of energies, human constructs of
          time and memory, decay, death, her own identity and encounters between
          mankind and his environment.
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
