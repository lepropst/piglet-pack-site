import CssBaseline from '@mui/material/CssBaseline';
import { ColorModeContext, useTheme } from '../utilities/styling';
import Head from 'next/head';
import { ThemeProvider } from '@mui/system';
import { GlobalStyles } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Body from '../components/body/body';
import createEmotionCache from '../utilities/createEmotionCache';
import { CacheProvider, EmotionCache } from '@emotion/react';
import Script from 'next/script';

const clientSideEmotionCache = createEmotionCache();
const DynamicHeader = dynamic(() => import('../components/header/header'), {
  suspense: true,
  ssr: false,
});
const DynamicFooter = dynamic(() => import('../components/footer/footer'), {
  suspense: true,
  ssr: false,
});
function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppProps & { emotionCache?: EmotionCache }) {
  const { colorMode, theme } = useTheme();
  const gStyles = (
    <GlobalStyles
      styles={{
        body: {
          backgroundImage:
            'linear-gradient(to left, rgba(29, 124, 181, .07), rgba(29, 181, 163,.1))',
        },
      }}
    />
  );
  return (
    <CacheProvider value={emotionCache}>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google_analytics" strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Piglet Pack</title>
        <meta name="description" content="Piglet pack web development" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <ColorModeContext.Provider value={colorMode}>
          <CssBaseline>
            {gStyles}
            <Suspense fallback={`Loading...`}>
              <DynamicHeader />
            </Suspense>

            <Body>
              <Component {...pageProps} />
            </Body>

            <Suspense fallback={'...loading'}>
              <DynamicFooter />
            </Suspense>
          </CssBaseline>
        </ColorModeContext.Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
