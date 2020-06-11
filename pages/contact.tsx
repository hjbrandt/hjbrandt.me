import { NextPage } from 'next'

// Components
import { Header } from '../components/layout/header/Header'
import { Nav } from '../components/layout/navigation/Nav'
import { PageWrapper } from '../components/layout/pageWrapper/PageWrapper.tsx'

interface Props {
  greeting?: string
}

const Contact: NextPage<Props> = () => {
  return (
    <>
      <Header />
      <Nav />
      <PageWrapper>Contact</PageWrapper>
    </>
  )
}

export default Contact
