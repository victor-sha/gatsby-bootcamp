import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout';

const BlogsList = () => {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark {
      edges{
        node{
           frontmatter{
            title,
            date
          }
        }
      }
    }
  }
  `)

  return data.allMarkdownRemark.edges
    .map(({node: {frontmatter}}) => {
      return (
        <li key={frontmatter.title}>
          <h2>{frontmatter.title}</h2>
          <p>{frontmatter.date}</p>
        </li>
      )
    })
}


const BlogPage = () => {
  return (
    <Layout>
      <ol>
        <BlogsList/>
      </ol>
    </Layout>
  )
}

export default BlogPage
