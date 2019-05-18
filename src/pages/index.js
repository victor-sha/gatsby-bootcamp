import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/footer';
import Header from '../components/header';

export default function IndexPage() {
  return (
    <div>
      <Header></Header>
      <h1>Hello</h1>
      <h2>I'm awsome developer</h2>
      <p>Need a developer? <Link to='/about'>Contact me</Link></p>
      <Footer />
    </div>
  )
}
