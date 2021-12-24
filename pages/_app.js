import '../styles/globals.css'
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image';
import PriceBadge from '../components/price-badge';

function MyApp({ Component, pageProps }) {
  return (
    <div className="p-8">
      <div className="flex items-center">
        <div className="flex items-center" href="/">
          <Image src="/literallyuseless.png" width="96" hegiht="96" className="pixelated" alt=""/>
          <div className="ml-2 leading-4">
            <h1 className="items-center text-4xl tracking-tight font-bold text-gray-400">literally useless</h1>
            <p className=" text-grimeGreen">$LITTY</p>
          </div>
        </div>
        <div className="ml-8">
          <PriceBadge ></PriceBadge>
        </div>
      </div>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp;