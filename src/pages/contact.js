import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SideBar from "../components/side-bar"

const ContactPage = () => (
  <Layout>
    <main className="info-pages">
      <SEO title="CONTACT" />
      <SideBar />
      <section className="text-wrapper contact-text">
        <p>
          Studio Air Jordan <br />
          Bergstrasse 26 <br />
          DE Berlin <br />
        </p>

        <p>
          +177 8065921
          <br />
          <a href="mailto:hello@dukhee.de">hello@dukhee.de</a>
          <br />
          instagram:{" "}
          <a
            href="https://www.instagram.com/dukhee_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            dukhee_
          </a>
        </p>
      </section>
    </main>
  </Layout>
)

export default ContactPage
