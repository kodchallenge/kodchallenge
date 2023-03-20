import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
    return (
        <Html lang="tr" data-theme="light">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            </Head>
            <body>
                <Main />
                <NextScript />
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-J3PXNERGEF"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'g-J3PXNERGEF');
                `}
                </Script>
            </body>
        </Html>
    )
}
