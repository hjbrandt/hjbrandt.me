import App from 'next/app'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    grey: '#CBCCCE',
    blue: '#01ADEF',
    red: '#EE3229',
    orange: '#F69427',
    green: '#00AB5C',
    yellow: '#FFCB21',
    black: '#000000',
    white: '#ffffff',
  },
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
