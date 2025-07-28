import { motion } from "framer-motion";
import { useTranslation, Trans } from "next-i18next";

export default function Hero() {

  const { t } = useTranslation("common");

  return (
    <motion.div
      className="hero"
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="text-center mt-5">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          FULLSTACK. <br /> WEB DEVELOPER.
        </motion.h1>

        <motion.a
          href="#contact" // Ganti dengan nomor WA kamu
          className="btn btn-dark px-5 mt-4 inline-block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
        >
          <Trans i18nKey="hero.button" />
        </motion.a>
      </div>
    </motion.div>
  );
}