import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
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
          fields {
            slug
          }
        }
      }
    }
  }
  `)

  return data.allMarkdownRemark.edges
    .map(({ node: { frontmatter, fields } }) => {
      return (
        <li key={frontmatter.title}>
          <h2>
            <Link to={`/blog/${fields.slug}`}>{frontmatter.title}</Link>
          </h2>
          <p>{frontmatter.date}</p>
        </li>
      )
    })
}


const BlogPage = () => {
  return (
    <Layout>
      <ol>
        <BlogsList />
      </ol>
    </Layout>
  )
}

export default BlogPage
