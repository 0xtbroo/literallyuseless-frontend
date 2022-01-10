import '../styles/globals.css'
import Image from 'react-bootstrap/Image';
import PriceBadge from '../components/price-badge';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  return (
    <div className="mt-4 px-4 mx-auto md:container">
      <div className="flex items-center justify-between">
        <a href="/" className="flex items-center">
          <Image src="/literallyuseless.png" width="64" height="64" className="pixelated" alt=""/>
          <div className="leading-4">
            <h1 style={{"width": "20px"}} className="leading-4 items-center text-xl tracking-tight font-bold text-dark">literally useless</h1>
          </div>
        </a>
        <div className='flex flex-row items-center space-x-8'>
          <a className='text-neutral hover-underline-animation' href='our-team'>earn $LITTY</a>
          <a className='text-neutral hover-underline-animation' href='our-team'>mission statement</a>
          <a className='text-neutral hover-underline-animation' href='our-team'>our team</a>
          <a className='text-dark font-bold hover-underline-animation' target='_blank' rel="noreferrer" href='https://snowtrace.io/address/0x00a1f22156A6dbf56C9e9cb16Ec63B0F9Ba94ad7'>contract</a>
          <PriceBadge></PriceBadge>
        </div>
      </div>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp;