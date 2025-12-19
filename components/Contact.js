import { motion } from "framer-motion";
import { useRef } from "react";
import { useTranslation, Trans } from "next-i18next";

export default function Contact() {
  const ref = useRef(null);
  const { t } = useTranslation("common");

  return (
    <div
      ref={ref}
      id="contact"
      className="running-text-section hide-floating-h"
      style={{ minHeight: "100vh", paddingBottom:"15rem" }}
    >
      {/* Running Text Background */}
      <div className="running-text-background">
        <Trans
          i18nKey="contact.running_text"
        />
      </div>

      {/* Foreground Content */}
      <div className="container contact-content">
        <div className="row g-5">
          {/* Image Section */}
          <div className="col-md-6">
            <img
              className="img-fluid"
              src="/assets/foto.jpeg"
              alt="Harizaldy photo"
              style={{
                width: "100%",
                maxWidth: "500px",
                filter: "grayscale(100%)",
              }}
            />
          </div>

          {/* Text Content */}
          <div className="col-md-6 d-flex align-items-end contact">
            <div className="w-100">
              <h5 className="mt-5">
                <i className="bi bi-envelope-at-fill"></i> 
                  &nbsp;
                  <Trans
                    i18nKey="contact.title"
                  />

              </h5>

              <h4 className="mt-4">
                  <Trans
                    i18nKey="contact.content"
                  />
              </h4>

              <h5 className="mt-4">
                <div className="flex flex-col gap-4">
                  {/* WhatsApp Section */}
                  <motion.div
                    className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    whileHover={{ scale: 1.03, boxShadow: "0px 4px 12px rgba(0,0,0,0.1)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-green-800 dark:text-green-200">
                        WhatsApp
                      </span>
                      <span className="text-sm text-green-600 dark:text-green-300 mx-1">
                        ( Fast Response )
                      </span>
                    </div>
                    <br />
                    <a
                      href="https://wa.me/6289632167121"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-green-700 dark:text-green-200 underline block mt-1"
                    >
                      <i className="bi bi-whatsapp me-2"></i> +62 896-3216-7121
                    </a>
                  </motion.div>

                  {/* Email Section */}
                  <motion.div
                    className="p-4 border rounded-lg bg-gray-50 dark:bg-white"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    whileHover={{ scale: 1.03, boxShadow: "0px 4px 12px rgba(0,0,0,0.1)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold">
                        Email
                      </span>
                    </div>
                    <br />
                    <a
                      href="mailto:zaldypratama83@gmail.com"
                      className="text-sm text-blue-700 dark:text-blue-300 underline block mt-1"
                    >
                      <i className="bi bi-envelope-at-fill me-2"></i> zaldypratama83@gmail.com
                    </a>
                  </motion.div>
                </div>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
