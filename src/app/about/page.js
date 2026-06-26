import { db } from "@/lib/db";
import styles from "@/styles/About.module.css";
import homeStyles from "@/styles/Home.module.css";

// Quick SVG Icon helper
function Icon({ name, className = "" }) {
  if (name === "shield") {
    return (
      <svg className={className} width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    );
  }
  if (name === "target") {
    return (
      <svg className={className} width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    );
  }
  if (name === "sparkles") {
    return (
      <svg className={className} width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    );
  }
  return null;
}

export default function About() {
  const team = db.getTeam();

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("");
  };

  return (
    <>
      {/* Page Header */}
      <section className={styles.headerSection}>
        <div className="grid-bg"></div>
        <div className="container">
          <h1 className={`${styles.title} reveal`}>
            Corporate Identity <span style={{ color: "var(--color-secondary)" }}>& Operations</span>
          </h1>
          <p className={`${styles.subtitle} reveal`}>
            Outpro.India is a premier operations enabler, helping international corporations construct high-performance remote teams and secure digital systems.
          </p>
        </div>
      </section>

      {/* Corporate Story */}
      <section className={homeStyles.section} style={{ paddingTop: "20px" }}>
        <div className="container">
          <div className={styles.storyGrid}>
            
            <div className={`${styles.storyContent} reveal-left`}>
              <h2 className={styles.storyTitle}>Disciplined Integration of Global Teams</h2>
              <p className={styles.storyText}>
                Founded with a core commitment to operational excellence, Outpro.India structures enterprise-grade remote hubs. We connect complex global resourcing mandates with India's elite professional talent pool.
              </p>
              <p className={styles.storyText}>
                We do not engage in simple, transactional remote staffing. We establish fully managed operational architectures. By managing modern physical workspaces, local employment compliance, payroll, and cultural integration, we ensure your offshore division functions as a secure, highly collaborative extension of your corporate offices.
              </p>
            </div>

            <div className={`${styles.visualContainer} reveal-scale`}>
              <div className={styles.visualPane}>
                <div className={styles.corporateStamp}>OUTPRO</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className={homeStyles.sectionAlt}>
        <div className="container">
          <div className={`${homeStyles.sectionHeader} reveal`}>
            <span className={homeStyles.sectionSubtitle}>Operational Pillars</span>
            <h2 className={homeStyles.sectionTitle}>Governed by Strict Corporate Principles</h2>
            <p className={homeStyles.sectionDesc}>
              Our delivery framework is structured around three foundational pillars, guaranteeing compliance, reliability, and precision.
            </p>
          </div>

          <div className={styles.valuesGrid}>
            <div className={`${styles.valueCard} glass-card reveal`} style={{ transitionDelay: "0.08s" }}>
              <div className={styles.valueIcon}>
                <Icon name="shield" />
              </div>
              <h3 className={styles.valueTitle}>Absolute Data Security</h3>
              <p className={styles.valueDesc}>
                We enforce rigorous access control, clean room environments, and secure networks, ensuring your proprietary systems and customer data remain protected.
              </p>
            </div>

            <div className={`${styles.valueCard} glass-card reveal`} style={{ transitionDelay: "0.16s" }}>
              <div className={styles.valueIcon}>
                <Icon name="target" />
              </div>
              <h3 className={styles.valueTitle}>Operational Precision</h3>
              <p className={styles.valueDesc}>
                Our management structures workflows using strict SLA metrics and daily quality assurance checks, guaranteeing disciplined delivery and consistency.
              </p>
            </div>

            <div className={`${styles.valueCard} glass-card reveal`} style={{ transitionDelay: "0.24s" }}>
              <div className={styles.valueIcon}>
                <Icon name="sparkles" />
              </div>
              <h3 className={styles.valueTitle}>Dynamic Scalability</h3>
              <p className={styles.valueDesc}>
                Our framework scales seamlessly with your business. Whether growing a squad from 2 to 50 members, our onboarding playbooks ensure zero operational lag.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership / Team Section */}
      <section className={homeStyles.section}>
        <div className="container">
          <div className={`${homeStyles.sectionHeader} reveal`}>
            <span className={homeStyles.sectionSubtitle}>Executive Leadership</span>
            <h2 className={homeStyles.sectionTitle}>The Directors Driving Outpro</h2>
            <p className={homeStyles.sectionDesc}>
              A multidisciplinary leadership team possessing extensive experience in global talent acquisition, corporate operations, and technical architecture.
            </p>
          </div>

          <div className={styles.teamGrid}>
            {team.map((member, idx) => (
              <div
                key={member.name}
                className={`${styles.teamCard} glass-card reveal`}
                style={{ transitionDelay: `${idx * 0.08}s` }}
              >
                <div className={styles.avatarWrapper}>
                  <span className={styles.avatarInitials}>{getInitials(member.name)}</span>
                </div>
                <h3 className={styles.teamName}>{member.name}</h3>
                <span className={styles.teamRole}>{member.role}</span>
                <p className={styles.teamBio}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
