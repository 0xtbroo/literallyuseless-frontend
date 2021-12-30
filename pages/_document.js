
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&family=Coming+Soon&display=swap" rel="stylesheet"/>
        </Head>
        <body className='bg-background font-primary'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}