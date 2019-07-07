import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Layout from '../components/layout';
import blogStyles from './blog.module.scss';

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
        <li key={frontmatter.title} className={blogStyles.blog}>
          <Link to={`/blog/${fields.slug}`}>
            <h2>
              {frontmatter.title}
            </h2>
            <p>{frontmatter.date}</p>
          </Link>
        </li>
      )
    })
}


const BlogPage = () => {
  return (
    <Layout>
      <ol className={blogStyles.blogs}>
        <BlogsList />
      </ol>
    </Layout>
  )
}

export default BlogPage
