import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Green Renaissance" />
        <link rel="icon" href="/favicon/favicon.ico" />
        <meta property="og:title" content="Gr" />
        <meta
          property="og:description"
          content="Tailor-made Financial Infrastructure"
        />
        <meta property="og:url" content="gr" />
        <meta property="og:image" content="https://cdn.bancof.io/bancof.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
