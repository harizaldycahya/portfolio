// pages/_app.js
import { appWithTranslation } from 'next-i18next';
import '../styles/global.css';
import LoadingCurtain from '../components/LoadingCurtain';
import { LanguageTransitionProvider } from "../lib/LanguageTransitionContext";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <LanguageTransitionProvider>
        <LoadingCurtain />
        <Component {...pageProps} />
      </LanguageTransitionProvider>
    </>
  );
}

export default appWithTranslation(MyApp);