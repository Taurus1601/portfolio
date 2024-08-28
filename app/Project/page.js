import React, { lazy, Suspense } from 'react'
import LayoutLoad from './layoutLoad'
import dynamic from 'next/dynamic'

const Content = dynamic(() => import('./home'), {
  loading: () => <LayoutLoad />,
  ssr: false,
});

function Home() {
  return (
    <div className='xl:scale-105 xl:ml-20'>
        <Content/>
    </div>
  )
}

export default Home





