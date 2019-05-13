import React from "react"
import styles from './index.module.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from '../components/Card'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className={styles.block}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.left}/>
          <div className={styles.right}>
            <p>Author name</p>
            <h2>The best way to wireframe a website</h2>
            <a href='#'>Read More</a>
          </div>
        </header>
            <div className={styles.content}>
              <Card />
              <Card />
            </div>
        
      </div>
    </div>
  </Layout>
)

export default IndexPage
