import MainPage1 from '@/components/MainPage1';
import TopBar from '@/components/TopBar';
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [page, setPage] = useState(0);
  return (
    <>
      <Head>
        <title>GR</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <>
          <TopBar page={page} />
          {page == 0 ? <MainPage1 /> : <></>}
        </>
      </main>
    </>
  );
}
