import { NextPage } from 'next'
// import styled from 'styled-components'

// Components
import { Header } from '../components/layout/header/Header'
import { Nav } from '../components/layout/navigation/Nav'
import { PageWrapper } from '../components/layout/pageWrapper/PageWrapper'
import { Hero } from '../components/hero/Hero'

interface Props {
  greeting?: string
}

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.blue};
// `

const Index: NextPage<Props> = () => {
  return (
    <>
      <Header />
      <Nav />
      <PageWrapper>
        {/* <Title>Hello world!</Title> */}
        <Hero />
      </PageWrapper>
    </>
  )
}

export default Index
