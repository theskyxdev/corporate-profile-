import { db } from "@/lib/db";
import styles from "@/styles/Portfolio.module.css";
import homeStyles from "@/styles/Home.module.css";

// SVG helper to represent Challenge, Solution, and KPI
function SectionIcon({ type }) {
  if (type === "challenge") {
    return (
      <svg className="gradient-text" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    );
  }
  if (type === "solution") {
    return (
      <svg className="gradient-text" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    );
  }
  return null;
}

export default function Portfolio() {
  const portfolio = db.getPortfolio();

  return (
    <>
      {/* Page Header */}
      <section className={styles.headerSection}>
        <div className={homeStyles.ctaGlow}></div>
        <div className="container">
          <h1 className={`${styles.title} reveal`}>
            Case Studies <span className="gradient-text">& KPI Highlights</span>
          </h1>
          <p className={`${styles.subtitle} reveal`}>
            Review our empirical proof of performance, displaying real-world challenges, customized operations architecture, and bottom-line outcomes.
          </p>
        </div>
      </section>

      {/* Stacked Case Studies */}
      <section className={homeStyles.section} style={{ paddingTop: "20px", paddingBottom: "120px" }}>
        <div className="container">
          <div className={styles.projectsStack}>
            {portfolio.map((project, idx) => (
              <div
                key={project.id}
                className={`${styles.projectCard} glass-card reveal`}
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                {/* Card Header */}
                <div className={styles.projectHeader}>
                  <div className={styles.metaInfo}>
                    <span className={styles.clientName}>{project.client}</span>
                    <h2 className={styles.projectTitle}>{project.title}</h2>
                  </div>
                  <span className={styles.categoryBadge}>{project.category}</span>
                </div>

                {/* Challenge, Solution, KPI Grid */}
                <div className={styles.detailGrid}>
                  
                  {/* Challenge Column */}
                  <div className={styles.col}>
                    <h3 className={styles.colTitle}>
                      <SectionIcon type="challenge" />
                      The Challenge
                    </h3>
                    <p className={styles.colText}>{project.challenge}</p>
                    <p className={styles.colText} style={{ marginTop: "0.5rem" }}>
                      {project.description}
                    </p>
                  </div>

                  {/* Solution Column */}
                  <div className={styles.col}>
                    <h3 className={styles.colTitle}>
                      <SectionIcon type="solution" />
                      Our Solution
                    </h3>
                    <p className={styles.colText}>{project.solution}</p>
                  </div>

                  {/* KPI Result Box */}
                  <div className={styles.col} style={{ justifyContent: "center" }}>
                    <div className={styles.kpiBox}>
                      <div className={styles.kpiValue}>{project.kpiValue}</div>
                      <div className={styles.kpiLabel}>{project.kpiMetric}</div>
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
