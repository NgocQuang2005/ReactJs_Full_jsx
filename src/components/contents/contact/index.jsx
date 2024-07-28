import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../../layout/_layout'
import motobe from '../../assets/images/moto1.jpeg'
const Contact = () => {
  return (
    <Layout>
      <div>
        <Helmet>
          <title>Contact</title>
        </Helmet>
        <h1>đây là trang contact</h1>
        <img src={motobe} alt="" />
      </div>
    </Layout>
  )
}

export default Contact
