import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import ContactForm from "@/components/ContactForm";
import styles from "@/styles/Services.module.css";
import homeStyles from "@/styles/Home.module.css";

// Checkmark SVG for benefits
function CheckIcon() {
  return (
    <svg className={styles.benefitIcon} width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default async function ServiceDetail({ params }) {
  const { slug } = await params;
  const service = db.getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* Detail Header */}
      <section className={styles.headerSection}>
        <div className={homeStyles.ctaGlow}></div>
        <div className="container">
          <h1 className={`${styles.title} reveal`}>
            <span className="gradient-text">{service.title}</span>
          </h1>
          <p className={`${styles.subtitle} reveal`}>
            Explore our operational playbooks, core integration processes, and direct strategic benefits.
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className={homeStyles.section} style={{ paddingTop: "20px" }}>
        <div className="container">
          <div className={styles.detailLayout}>
            
            {/* Main Details (Timeline + Benefits) */}
            <div className={styles.detailMain}>
              
              {/* Long Overview */}
              <div className="reveal-left" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <h2 className={styles.processTitle}>Operational Overview</h2>
                <p className={styles.serviceDesc} style={{ fontSize: "1.1rem" }}>
                  {service.longDescription}
                </p>
              </div>

              {/* Step-By-Step Process Timeline */}
              <div className={`${styles.processSection} reveal-left`}>
                <h2 className={styles.processTitle}>Onboarding & Execution Timeline</h2>
                <div className={styles.processTimeline}>
                  {service.process.map((p, idx) => (
                    <div key={idx} className={styles.processStep}>
                      <span className={styles.stepNumber}>{p.step}</span>
                      <h3 className={styles.stepTitle}>{p.title}</h3>
                      <p className={styles.stepDesc}>{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits Checklist */}
              <div className="reveal-left" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <h2 className={styles.processTitle}>Strategic Advantages & KPIs</h2>
                <ul className={styles.benefitsList} style={{ gap: "1.25rem" }}>
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className={styles.benefitItem} style={{ fontSize: "1.05rem" }}>
                      <div style={{ background: "rgba(0, 229, 255, 0.05)", borderRadius: "6px", padding: "0.25rem", display: "flex", alignItems: "center" }}>
                        <CheckIcon />
                      </div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Sticky Sidebar Contact Card */}
            <aside className={`${styles.sidebarCard} reveal-right`}>
              <div className="glass-card" style={{ padding: "2rem" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "0.5rem" }}>Inquire for this Module</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", marginBottom: "2rem", lineHeight: "1.5" }}>
                  Need {service.title}? Submit a quick inquiry below, and our architects will design a bespoke operational draft.
                </p>
                <ContactForm defaultService={service.title} />
              </div>
            </aside>

          </div>
        </div>
      </section>
    </>
  );
}
