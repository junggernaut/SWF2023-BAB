import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Bancof is a financial infrastructure for Web3 communities, starting with NFT-backed membership lending service."
        />
        <link rel="icon" href="/favicon/favicon.ico" />
        <meta property="og:title" content="Bancof" />
        <meta
          property="og:description"
          content="Tailor-made Financial Infrastructure"
        />
        <meta property="og:url" content="bancof.io" />
        <meta property="og:image" content="https://cdn.bancof.io/bancof.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
