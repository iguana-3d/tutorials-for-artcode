import Head from 'next/head';
import Button01 from '../components/button01';

export default function Home() {
  return (
    <>
      <Head>
        <title>Artcode</title>
        <link rel="icon" href="/static/images/favicon.ico" />
      </Head>
      <Button01 />
    </>
  )
}
