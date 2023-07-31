import MainPage1 from '@/components/MainPage1';
import TopBar from '@/components/TopBar';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Bancof</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <>
          <TopBar />
          <MainPage1 />
        </>
      </main>
    </>
  );
}
