// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Antonio:wght@100..700&family=Manufacturing+Consent&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" /> 

        {/* Bootstrap CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr"
          crossOrigin="anonymous"
        />

        {/* Bootstrap Icons */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
          rel="stylesheet"
        />

        {/* Flag Icons */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/flag-icons/css/flag-icons.min.css"
        />

        <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/assets/favicon_io/site.webmanifest" />

        {/* English (default) */}
        <link rel="alternate" href="https://harizaldyportfolio.vercel.app/" hreflang="en" />

        {/* Indonesian */}
        <link rel="alternate" href="https://harizaldyportfolio.vercel.app/id" hreflang="id" />

        {/* Fallback */}
        <link rel="alternate" href="https://harizaldyportfolio.vercel.app/" hreflang="x-default" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}