import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout';

const About = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p>This is about gatsby bootcamp</p>
      <p><Link to='/contact'>Contact me</Link></p>
    </Layout>
  )
}

export default About
