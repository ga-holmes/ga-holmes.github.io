import Head from 'next/head'

import MainPage from './components/MainPage'
import Meta from './components/Meta'

export default function Home() {

  return (
    <div>
      <Meta />
      <MainPage/>
    </div>
  )
}
