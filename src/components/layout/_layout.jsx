import React from 'react'
import Header from './header'
import Footer from './footer'

const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <div className="bg-slate-200">
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout