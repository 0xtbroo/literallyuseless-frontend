import Head from 'next/head';
import UselessButton from '../components/useless-button';
import Script from 'next/script';

export default function Home() {
  return (
    <main className="flex items-center h-full static items-center justify-center">
      <Script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></Script>
      <Head>
        <title>literally useless</title>
        <meta name="description" content="Literally Useless Coin"></meta>
      </Head>
      <div className='p-8 mr-32'>
        <h1 className="font-secondary text-dark text-8xl mb-4">$LITTY</h1>
        <h2 className='text-neutral font-secondary text-4xl'>
          The reward currency,<br/>for web games
        </h2>
        <div className='mt-12'>
          <UselessButton to={"https://traderjoexyz.com/#/trade?inputCurrency=&outputCurrency=0x00a1f22156A6dbf56C9e9cb16Ec63B0F9Ba94ad7"}>
            <span className='text-secondary text-lg'>click to buy</span>
          </UselessButton>
        </div>
      </div>
      <figure>
        <model-viewer style={{width:"500px",height:"600px"}} loading="eager" auto-rotate-delay="1000" camera-orbit="0 65deg 0"
          interaction-prompt="none" rotation-per-second="200%" camera-controls auto-rotate environment-image="neutral" 
          disable-zoom shadow-intensity="0.6" src="/litty_voxel.glb"></model-viewer>
      </figure>
    </main>
  )
}
