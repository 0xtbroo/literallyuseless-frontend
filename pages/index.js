import Head from 'next/head';
import UselessButton from '../components/useless-button';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex items-center h-full static items-center space-x-48 justify-center">
      <Head>
        <title>literally useless</title>
        <meta name="description" content="Literally Useless Coin"></meta>
      </Head>
      <div>
        <h1 className="font-secondary text-dark text-8xl mb-4">$LITTY</h1>
        <h2 className='text-neutral font-secondary text-4xl'>
          A useless coin,<br/>for useless people
        </h2>
        <div className='mt-12'>
          <UselessButton to={"https://traderjoexyz.com/#/trade?inputCurrency=&outputCurrency=0x00a1f22156A6dbf56C9e9cb16Ec63B0F9Ba94ad7"}>
            <span className='text-secondary text-lg'>buy if ur dumb</span>
          </UselessButton>
        </div>
      </div>
      <figure>
        <a href="https://help.endhomelessness.org/donate/" className='blur-edges-bg'>
          <Image src="/homeless.jpeg" width="800px" height="600px" alt="Homeless guy happy"></Image>
        </a>
        <figcaption className='text-center text-neutral italics mt-2'>
          this could be you!
        </figcaption>
      </figure>
    </main>
  )
}
