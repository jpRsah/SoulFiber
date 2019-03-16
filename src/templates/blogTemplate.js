import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
// import hljs from 'highlight.js/lib/highlight';
// import cpp from 'highlight.js/lib/languages/cpp';
import '../../node_modules/highlight.js/styles/tomorrow.css'
import Highlight from 'react-highlight' 

// hljs.registerLanguage('cpp', cpp);

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  // hljs.highlight();
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <strong>{frontmatter.date}</strong>
        <Highlight innerHTML={true}>{html}</Highlight>
        {/* {<div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />} */}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD.MM.YYYY")
        path
        title
      }
    }
  }
`
