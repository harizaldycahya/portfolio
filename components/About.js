import { motion } from "framer-motion";
import { useTranslation, Trans } from "next-i18next";

export default function About() {
  const { t } = useTranslation("common");

  return (
    <motion.div
      className="about"
      style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
      exit={{ opacity: 0, y: 80 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="mt-5 row w-100">
        <div className="col-12 text-left">
          <div style={{ minHeight: "3rem" }}></div>

          <h4>{t("about.title")}</h4>
          <br />
          <h3
            className="hide-mobile"
            style={{ textAlign: "right", paddingRight: "5rem" }}
          >
            <Trans
              i18nKey="about.headlineDesktop"
              components={{
                1: <span style={{ color: "#FF5733" }} />,
              }}
            />
          </h3>

          <h3
            className="show-mobile"
            style={{ textAlign: "left" }}
          >
            <Trans
              i18nKey="about.headlineMobile"
              components={{
                1: <span style={{ color: "#FF5733" }} />,
              }}
            />
          </h3>

          <h3>
            <Trans
              i18nKey="about.description"
              components={{
                1: <span style={{ color: "#FF5733" }} />,
                3: <span style={{ color: "#FF5733" }} />,
              }}
            />
          </h3>
        </div>
      </div>
    </motion.div>
  );
}