import { NextPage } from 'next'

// Components
import { Footer } from '../components/footer/Footer'

interface Props {
  greeting?: string
}

const Index: NextPage<Props> = () => {
  return (
    <>
      <div>Hello world!</div>
      <Footer />
    </>
  )
}

export default Index
