// pages/index.js

import Head from "next/head";
import { motion } from "framer-motion";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import FloatingH from "../components/FloatingH";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import TechStack from "../components/TechStack";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useLangTransition } from "../lib/LanguageTransitionContext";

export default function Home() {
  const { isSwitchingLang } = useLangTransition();
  return (
    <>
      {/* Tambahkan Head agar HTML lebih SEO-friendly */}
      <Head>
        <meta name="google-site-verification" content="MqQgYiHUtyWGr7aQxf0K67uWt82Eua-ngys8kHFN8mQ" />
        <title>Harizaldy | Portfolio</title>
        <meta name="description" content="Harizaldy's Personal Portfolio" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isSwitchingLang ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
          <div className="main-content">
            <FloatingH />
            <Navbar />
            <Hero />
            <About />
            <div style={{ minHeight: "10rem" }}></div>
            <TechStack />
          </div>

          <div style={{ minHeight: "10rem" }}></div>
          <Portfolio />
          <Contact />
          <Footer />
      </motion.div>

    </>
  );
}

// ✅ Load translation for the "common" namespace
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}