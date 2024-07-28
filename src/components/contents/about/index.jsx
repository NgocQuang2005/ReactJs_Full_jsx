import React from 'react'
import Layout from './../../layout/_layout';
import Product from './product/product';
import { ProductNav } from './product/productnav';
import { Helmet } from 'react-helmet';
import ImageSlider from '../../imgSlider';
const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>About</title>
      </Helmet>
      <div className="container mx-auto py-[40px]" >
        <div className="my-4">
          <ImageSlider/>
        </div>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4'>
          {
            ProductNav.map((item => {
              return <Product
                key={item.id}
                img={item.imgpd}
                nameshop={item.shopname}
                progr={item.progss}
                rate={item.pr}
                crprice={item.curenpr}
                price={item.prices}
                productname={item.namepd}
              />
            }))
          }
        </div>
      </div>
    </Layout>

  )
}

export default About
