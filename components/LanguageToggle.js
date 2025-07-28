useEffect(() => {
  const languageToggle = document.getElementById('languageToggle');
  const flagIcon = document.getElementById('flagIcon');
  let currentLang = 'en';

  const toggleLanguage = () => {
    currentLang = currentLang === 'en' ? 'id' : 'en';
    if (flagIcon) {
      flagIcon.className = currentLang === 'id' ? 'fi fi-id' : 'fi fi-gb';
    }
    console.log('Language changed to:', currentLang);
  };

  languageToggle?.addEventListener('click', toggleLanguage);
  return () => languageToggle?.removeEventListener('click', toggleLanguage);
}, []);