import HomePage from '@/components/HomePage';
import MyPage from '@/components/MyPage';
import TopBar from '@/components/TopBar';
import Head from 'next/head';
import { useState } from 'react';

export default function Main() {
  const [page, setPage] = useState(0);
  return (
    <>
      <Head>
        <title>GR</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <>
          <TopBar page={page} setPage={setPage} />
          {page == 0 ? <HomePage /> : <></>}
          {page == 1 ? <MyPage /> : <></>}
        </>
      </main>
    </>
  );
}
