import React from "react"
import Layout from "../components/layout"

const AboutPage = () => (
  <Layout seoTitle="ABOUT">
    <main className="info-pages">
      <section className="text-wrapper">
        <p className="measure about-text">
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

        <p className="mv5 description">
          <a
            className="underline db"
            href="../../CV/DukHee_CV_2020.pdf"
            target="_blank"
          >
            CV
          </a>
          text by
          <a
            href="https://paulinedoutreluingne.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Pauline Doutreluingne
          </a>
          <p>
            built by <a href="https://theholding.page">Hold </a> ©
            {new Date().getFullYear()}
          </p>
        </p>
      </section>
    </main>
  </Layout>
)

export default AboutPage
