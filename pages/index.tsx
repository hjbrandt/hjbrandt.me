import { NextPage } from 'next'

interface Props {
  greeting?: string
}

const Index: NextPage<Props> = () => {
  return <div>Hello world!</div>
}

export default Index
