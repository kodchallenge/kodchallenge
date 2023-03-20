import { RootState, wrapper } from '@/store';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../assets/styles/globals.css'
import { SessionProvider } from "next-auth/react"
import LoginModal from '@/components/modals/LoginModal';
import { useSelector } from 'react-redux';
function CustomApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const { showLoginModal } = useSelector((state: RootState) => state.app)
  return (
    <SessionProvider session={session}>
      <Head>
        <title>KodChallenge Türkçe Programlama Platformu ⚡</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
      {showLoginModal && <LoginModal />}
    </SessionProvider>
  );
}

export default wrapper.withRedux(CustomApp);
