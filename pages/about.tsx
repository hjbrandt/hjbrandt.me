import { NextPage } from 'next'

// Components
import { Header } from '../components/layout/header/Header'
import { Nav } from '../components/layout/navigation/Nav'
import { PageWrapper } from '../components/layout/pageWrapper/PageWrapper'

interface Props {
  greeting?: string
}

const About: NextPage<Props> = () => {
  return (
    <>
      <Header />
      <Nav />
      <PageWrapper>About</PageWrapper>
    </>
  )
}

export default About
