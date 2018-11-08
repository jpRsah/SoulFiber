import React from 'react'
// import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Layout from '../components/layout'
import Vtle from '../components/Vtle';

export default function News ({data}) {

  let items = data.allMarkdownRemark.edges.map((item)=>{
    return (
      <Vtle
        date={item.node.frontmatter.date}
        title={item.node.frontmatter.title}
        description={item.node.frontmatter.description}
      />
    )
  })

  return (
    <Layout className="bg-dark">
      <VerticalTimeline>
        {items}
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: 'red' }}
        />
      </VerticalTimeline>
    </Layout>
  );
}
export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges{
        node{
          # html
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            # link
            title
            description
          }
        }
      }
    }
  }
`