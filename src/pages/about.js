import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/footer';
import Header from '../components/header';

const About = () => {
  return (
    <div>
      <Header></Header>
      <h1>About</h1>
      <p>This is about gatsby bootcamp</p>
      <p><Link to='/contact'>Contact me</Link></p>
      <Footer/>
    </div>
  )
}

export default About
