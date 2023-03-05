import { wrapper } from '@/store';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../assets/styles/globals.css'
import { SessionProvider } from "next-auth/react"
function CustomApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>KodChallenge Türkçe Programlama Platformu ⚡</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
}

export default wrapper.withRedux(CustomApp);
