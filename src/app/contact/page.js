import ContactForm from "@/components/ContactForm";
import styles from "@/styles/Contact.module.css";
import homeStyles from "@/styles/Home.module.css";

// SVG helper for contact channels
function ChannelIcon({ type }) {
  if (type === "map") {
    return (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    );
  }
  if (type === "email") {
    return (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    );
  }
  if (type === "phone") {
    return (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    );
  }
  if (type === "clock") {
    return (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  }
  return null;
}

export default function Contact() {
  return (
    <>
      {/* Page Header */}
      <section className={styles.headerSection}>
        <div className={homeStyles.ctaGlow}></div>
        <div className="container">
          <h1 className={`${styles.title} reveal`}>
            Initiate <span className="gradient-text">Consultation</span>
          </h1>
          <p className={`${styles.subtitle} reveal`}>
            Submit your operational objectives and requirements. Our architectural desk will map out a custom blueprint for your remote squads.
          </p>
        </div>
      </section>

      {/* Two-Column Form & Details */}
      <section className={homeStyles.section} style={{ paddingTop: "20px", paddingBottom: "120px" }}>
        <div className="container">
          <div className={styles.grid}>
            
            {/* Left: Corporate Offices & Channels */}
            <div className={`${styles.infoCard} reveal-left`}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <h2 className={styles.infoTitle}>Connect Digitally</h2>
                <p className={styles.infoText}>
                  Outpro.India operates top-tier delivery centers and modern engineering workstations. Contact our global accounts desk for SLAs, compliance briefs, or dynamic scaling quotes.
                </p>
              </div>

              <div className={styles.contactList}>
                <div className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <ChannelIcon type="map" />
                  </div>
                  <div className={styles.itemContent}>
                    <span className={styles.itemLabel}>India Headquarters</span>
                    <span className={styles.itemValue}>
                      Level 8, Cyber Heights, HITEC City,<br />
                      Hyderabad, TS 500081, India
                    </span>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <ChannelIcon type="email" />
                  </div>
                  <div className={styles.itemContent}>
                    <span className={styles.itemLabel}>Accounts Desk</span>
                    <span className={styles.itemValue}>growth@outpro.india</span>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <ChannelIcon type="phone" />
                  </div>
                  <div className={styles.itemContent}>
                    <span className={styles.itemLabel}>Voice Hotline</span>
                    <span className={styles.itemValue}>+91 40 4829 3000</span>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <ChannelIcon type="clock" />
                  </div>
                  <div className={styles.itemContent}>
                    <span className={styles.itemLabel}>Service Commitment</span>
                    <span className={styles.itemValue}>
                      Monday - Friday, 9:00 AM - 6:00 PM IST<br />
                      <strong style={{ color: "var(--color-primary)" }}>4-Hour Response SLA</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Glassmorphic Form Card */}
            <div className="glass-card reveal-right" style={{ padding: "3rem 2.5rem" }}>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
