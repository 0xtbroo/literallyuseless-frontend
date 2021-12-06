import Head from 'next/head';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Literally Useless Coin</title>
      </Head>
      <Button variant="outline-primary">Test</Button>
    </div>
  )
}
