import React from "react"
import styles from './index.module.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className={styles.block}>
      <div className={styles.container}>
        <header className={styles.header}>
          Header
        </header>
            <div className={styles.content}>
              <h1>Hello World</h1>
                <p>Welcome to your new Gatsby site.</p>
                <p>Now go build something great.</p>
            </div>
        <footer className={styles.footer}>
          Footer
        </footer>
      </div>
    </div>
  </Layout>
)

export default IndexPage
