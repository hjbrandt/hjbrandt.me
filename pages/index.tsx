import { NextPage } from 'next'

// Components
import { Footer } from '../components/layout/footer/Footer'
import { Header } from '../components/layout/header/Header'

interface Props {
  greeting?: string
}

const Index: NextPage<Props> = () => {
  return (
    <>
      <Header />
      <div>Hello world!</div>
      <Footer />
    </>
  )
}

export default Index
