import { NextPage } from 'next'

// Components
import { Header } from '../components/layout/header/Header'
import { Nav } from '../components/layout/navigation/Nav'
import { PageWrapper } from '../components/layout/pageWrapper/PageWrapper.tsx'
import { Hero } from '../components/hero/Hero.tsx'

interface Props {
  greeting?: string
}

const Index: NextPage<Props> = () => {
  return (
    <>
      <Header />
      <Nav />
      <PageWrapper>
        <Hero />
      </PageWrapper>
    </>
  )
}

export default Index
