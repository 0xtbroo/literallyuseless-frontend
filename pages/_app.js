import '../styles/globals.css'
import Image from 'react-bootstrap/Image';
import PriceBadge from '../components/price-badge';

function MyApp({ Component, pageProps }) {
  return (
    <div className="mt-4 px-4 mx-auto lg:container">
      <header className="flex items-center justify-between">
        <a href="/" className="flex items-center">
          <Image src="/literallyuseless.png" width="64" height="64" className="pop-animation pixelated" alt="Literally Useless Logo"/>
          <div className="leading-4">
            <h1 style={{"width": "20px"}} className="leading-4 items-center text-xl tracking-tight font-bold text-dark">literally useless</h1>
          </div>
        </a>
        <div className='flex flex-row items-center space-x-8'>
          <a className='text-neutral hover-underline-animation' href='our-team'>earn $LITTY</a>
          <a className='text-neutral hover-underline-animation' href='our-team'>our team</a>
          <a className='text-dark font-bold hover-underline-animation' target='_blank' rel="noreferrer" href='https://snowtrace.io/address/0x00a1f22156A6dbf56C9e9cb16Ec63B0F9Ba94ad7'>contract</a>
          <PriceBadge></PriceBadge>
        </div>
      </header>
      <Component {...pageProps} />
      <footer className="w-full  fixed  left-0 bottom-0 py-4 ">
        <div className='w-full flex space-x-4 justify-center'>
          <a className='w-8 h-8' href=''>
            <Image src="/discord.png" alt="discord logo"></Image>
          </a>
        </div>
        <div className='w-full flex space-x-4 justify-center  text-neutral'>
          <a className='hover-underline-animation' href="/">contact</a>
        </div>
        <div className='fixed' style={{"transform": "rotate(20deg)", left: "-80px", bottom:"-80px"}}>
          <Image src="/landfill.png" alt="pile of trash"></Image>
        </div>
        <div className='fixed ' style={{"transform": "rotate(-20deg)", right: "-80px", bottom:"-80px"}}>
          <Image src="/landfill.png" alt="pile of trash"></Image>
        </div>
      </footer>

    </div>
  )
}

export default MyApp;