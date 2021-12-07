import '../styles/globals.css'
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image';
import PriceBadge from '../components/price-badge';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div className="2xl:container p-4 mx-auto">
        <Navbar.Brand className="flex items-center" href="/">
          <Image src="/literallyuseless.png" width="96" hegiht="96" className="pixelated" alt=""/>
          <div className="ml-2 leading-4">
            <h1 className="items-center text-4xl tracking-tight font-bold text-grimeGreen">literally useless</h1>
            <p>$LITTY</p>
          </div>
          <PriceBadge></PriceBadge>
        </Navbar.Brand>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp;