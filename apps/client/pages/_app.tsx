import { wrapper } from '@/store';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../assets/styles/globals.css'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>KodChallenge Türkçe Programlama Platformu ⚡</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default wrapper.withRedux(CustomApp);
