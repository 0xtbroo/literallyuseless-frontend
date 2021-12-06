import '../styles/globals.css'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Container>
        <Navbar.Brand href="/">Literally Useless</Navbar.Brand>
        <Component {...pageProps} />
      </Container>

    </div>
  )
}

export default MyApp
