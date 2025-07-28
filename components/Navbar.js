import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { useLangTransition } from '../lib/LanguageTransitionContext';
import { useEffect } from 'react';


export default function Navbar() {
  const { t } = useTranslation('common');
  const router = useRouter();

  const { setIsSwitchingLang } = useLangTransition();

  const toggleLang = () => {
    setIsSwitchingLang(true);

    const newLocale = router.locale === 'en' ? 'id' : 'en';
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  // RESET isSwitchingLang AFTER route change
  useEffect(() => {
    const handleRouteChangeComplete = () => {
      setIsSwitchingLang(false);
    };

    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router]);


  const flagClass = router.locale === 'en' ? 'fi fi-gb' : 'fi fi-id';

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm fixed-top">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">HARIZALDY</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="navbarContent">
          <ul className="navbar-nav mx-auto mb-2 mb-md-0">
            <li className="nav-item"><a className="nav-link" href="#about">{t('nav.about')}</a></li>
            <li className="nav-item"><a className="nav-link" href="#work">{t('nav.work')}</a></li>
            <li className="nav-item"><a className="nav-link" href="#portfolio">{t('nav.portfolio')}</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">{t('nav.contact')}</a></li>
          </ul>

          <div className="d-flex align-items-center gap-3">
            <button
              onClick={toggleLang}
              className="btn btn-outline-secondary"
            >
              <span className={flagClass} style={{ width: '1.2rem', height: '1.2rem' }}></span>
            </button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}