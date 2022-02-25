import { useState } from 'react'
import Nav from './components/Nav'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const [links] = useState([

    {
      text: 'Home',
      linkTo: '/'
    },
    {
      text: 'Gallery',
      linkTo: '/gallery'
    },
    {
      text: 'Experience',
      linkTo: '/#experience'
    },
    {
      text: 'Projects',
      linkTo: '/#projects'
    },
  ])


  return (
    <div>
      <Nav linksList={links} />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
