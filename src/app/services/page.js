import Link from "next/link";
import { db } from "@/lib/db";
import styles from "@/styles/Services.module.css";
import homeStyles from "@/styles/Home.module.css";

// Checkmark SVG for benefits
function CheckIcon() {
  return (
    <svg className={styles.benefitIcon} width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function Services() {
  const services = db.getServices();

  const mockPaneValues = {
    "offshore-staffing": { val: "62%", lbl: "Average Cost Reduction" },
    "bpo-operations": { val: "98.5%", lbl: "SLA Adherence Rate" },
    "digital-transformation": { val: "150ms", lbl: "Server Response Latency" },
    "it-consulting": { val: "100%", lbl: "Cyber Compliance Audited" }
  };

  return (
    <>
      {/* Page Header */}
      <section className={styles.headerSection}>
        <div className={homeStyles.ctaGlow}></div>
        <div className="container">
          <h1 className={`${styles.title} reveal`}>
            Specialized <span className="gradient-text">Operations & Tech</span>
          </h1>
          <p className={`${styles.subtitle} reveal`}>
            Explore our comprehensive suite of professional outsourcing capabilities, elite offshore talent, and high-performance digital architectures.
          </p>
        </div>
      </section>

      {/* Alternate Rows Services Directory */}
      <section className={homeStyles.section} style={{ paddingBottom: "120px" }}>
        <div className="container">
          {services.map((service, idx) => {
            const isEven = idx % 2 === 0;
            const pane = mockPaneValues[service.slug] || { val: "100%", lbl: "Client Satisfaction" };
            
            return (
              <div
                key={service.id}
                className={isEven ? styles.serviceRow : styles.serviceRowReverse}
              >
                
                {/* Text Details Panel */}
                <div className={`${styles.serviceInfo} reveal-${isEven ? "left" : "right"}`}>
                  <span className={styles.serviceBadge}>Module 0{idx + 1}</span>
                  <h2 className={styles.serviceTitle}>{service.title}</h2>
                  <p className={styles.serviceDesc}>{service.longDescription}</p>
                  
                  <ul className={styles.benefitsList}>
                    {service.benefits.map((benefit, bidx) => (
                      <li key={bidx} className={styles.benefitItem}>
                        <CheckIcon />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ marginTop: "1rem" }}>
                    <Link href={`/services/${service.slug}`} className="btn-primary">
                      <span>Explore Core Framework</span>
                    </Link>
                  </div>
                </div>

                {/* Graphic Visual Panel */}
                <div className={`${styles.paneGraphic} reveal-scale`}>
                  <div className={styles.paneValue}>
                    <div className={styles.paneNumber}>{pane.val}</div>
                    <div className={styles.paneLabel}>{pane.lbl}</div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
