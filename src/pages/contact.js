import React from "react"
import Layout from "../components/layout"

const ContactPage = () => (
  <Layout seoTitle="CONTACT">
    <main className="info-pages">
      <section className="text-wrapper contact-text">
        <p>
          Studio Air Jordan <br />
        </p>

        <p>
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
