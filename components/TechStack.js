import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation, Trans } from "next-i18next";

export default function TechStack() {
  const { t } = useTranslation("common");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      id="techstack"
      ref={ref}
      className="tech_stack section"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.h4
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <i className=""></i> Tech Stack
      </motion.h4>

      <div className="row">
        <div className="col-md-6">
          <div style={{ minHeight: "3rem" }}></div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
           <Trans
              i18nKey="techstack.headline"
            />
          </motion.h2>
        </div>

        <div className="col-md-6 techstack">
          <div style={{ minHeight: "4rem" }}></div>
          <div className="row">
            {[
              { title: "Figma", desc: "UI/UX Design" },
              { title: "React.js", desc: "Frontend" },
              { title: "Tailwind CSS", desc: "Utility-First Styling" },
              { title: "Bootstrap", desc: "Responsive Framework" },
              { title: "Laravel", desc: "Backend (PHP)" },
              { title: "Express.js", desc: "Backend (Node.js)" },
              { title: "MySQL", desc: "Relational DB" },
              { title: "MongoDB", desc: "NoSQL DB" },
            ].map((tool, i) => (
              <motion.div
                key={tool.title}
                className="col-6 mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
              >
                <h4>{tool.title} <i></i></h4>
                <p>{tool.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}