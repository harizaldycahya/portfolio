import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation, Trans } from "next-i18next";


const projects = [
  { 
    title: "PORTFOLIO WEBSITE",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quisquam veritatis cupiditate laudantium magni illum quaerat cumque placeat, blanditiis vitae.",
    tags: ["NEXT JS", "BOOTSTRAP", "FRAMER MOTION"],
    image: "/assets/portfolio.png",
    link: "#",
  },
  {
    title: "NOT YET",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, adipisci.",
    tags: ["Lorem", "Lorem", "Lorem"],
    image: "/assets/default.jpg",
    link: "#",
  },
  {
    title: "NOT YET",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, adipisci.",
    tags: ["Lorem", "Lorem", "Lorem"],
    image: "/assets/default.jpg",
    link: "#",
  },
  {
    title: "NOT YET",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, adipisci.",
    tags: ["Lorem", "Lorem", "Lorem"],
    image: "/assets/default.jpg",
    link: "#",
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const { t } = useTranslation("common");
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="hide-floating-h portfolio-wrapper"
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
      id="portfolio"
    >
      <div className="m-auto portfolio">
        <div className="mt-5 row">
          <div className="col-12 text-center">
            <div style={{ minHeight: "3rem" }}></div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Trans
                i18nKey="portfolio.title"
              />
            </motion.h4>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Trans
                i18nKey="portfolio.headline1"
              />
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Trans
                i18nKey="portfolio.headline2"
              />
            </motion.h2>
          </div>
        </div>

        <div className="mt-5 row gy-custom gx-4">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="col-lg-6"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + i * 0.2, duration: 0.6 }}
            >
              <a href={project.link} className="image-hover-zoom d-block text-decoration-none">
              <motion.div
                className="image-wrapper position-relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="img-fluid w-100"
                  style={{
                    height: "400px",
                    objectFit: "cover",
                    borderRadius: "12px",
                  }}
                />

                {/* Overlay */}
                <div className="overlay d-flex justify-content-center align-items-center">
                  <span className="overlay-text">See this project</span>
                </div>
              </motion.div>

                <div style={{ minHeight: "1rem" }}></div>
                <h5>{project.title}</h5>
                <p>{project.desc}</p>
                <div style={{ minHeight: ".5rem" }}></div>
                {project.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="custom-badge"
                  >
                    {tag}
                  </span>
                ))}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
      <div style={{ minHeight: "20rem" }}></div>
    </motion.div>
  );
}
