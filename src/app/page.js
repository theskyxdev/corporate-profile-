import Link from "next/link";
import { db } from "@/lib/db";
import styles from "@/styles/Home.module.css";

// SVG Icons helper component to keep the markup clean
function Icon({ name, size = 20, className = "" }) {
  if (name === "users") {
    return (
      <svg className={className} width={size} height={size} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    );
  }
  if (name === "headphones") {
    return (
      <svg className={className} width={size} height={size} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V9a6 6 0 00-12 0v10a2 2 0 002 2z" />
      </svg>
    );
  }
  if (name === "code") {
    return (
      <svg className={className} width={size} height={size} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    );
  }
  if (name === "trending-up") {
    return (
      <svg className={className} width={size} height={size} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    );
  }
  return null;
}

export default function Home() {
  const services = db.getServices();
  const portfolio = db.getPortfolio();

  const metrics = [
    { value: "62%", label: "Operating Efficiency", desc: "Average client expense reduction" },
    { value: "40+", label: "Active Enterprise Clients", desc: "Global institutions and scaleups" },
    { value: "98.5%", label: "SLA Compliance", desc: "For support and technical operations" },
    { value: "150ms", label: "Digital Latency", desc: "Optimized server architectures" }
  ];

  const testimonials = [
    {
      quote: "Outpro.India has built a dedicated, highly skilled engineering division in India that integrates directly into our sprint cycles. Their professionalism, data governance, and execution standards are exceptional.",
      author: "Marcus Vance",
      role: "Chief Technology Officer, PaySphere LLC",
      initials: "MV"
    },
    {
      quote: "Our global customer support desk scaled from 0 to 24 agents within three weeks. They operate under rigorous quality audits and have maintained an outstanding CSAT score.",
      author: "Sofia Gärtner",
      role: "VP of Operations, CargoMove",
      initials: "SG"
    }
  ];

  return (
    <>
      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <div className="grid-bg"></div>
        <div className="container">
          <div className={styles.heroGrid}>
            
            <div className={styles.heroContent}>
              <span className={`${styles.heroSubtitle} reveal`}>
                Global Operations Partner
              </span>
              <h1 className={`${styles.heroTitle} reveal`}>
                High-Performance Deployed Teams and <span style={{ color: "var(--color-secondary)" }}>Digital Architecture</span>
              </h1>
              <p className={`${styles.heroDescription} reveal`}>
                Outpro.India structures enterprise-grade remote hubs, multilingual customer desks, and secure software frameworks, enabling international corporations to scale efficiently.
              </p>
              <div className={`${styles.heroActions} reveal`}>
                <Link href="/contact" className="btn-primary">
                  <span>Initiate Operations Brief</span>
                </Link>
                <Link href="/services" className="btn-secondary">
                  Our Service Modules
                </Link>
              </div>
            </div>

            <div className={`${styles.heroGraphicContainer} reveal-scale`}>
              <div className={styles.heroVisual}>
                
                <div className={`${styles.heroFloatingCard} ${styles.card1}`}>
                  <div style={{ background: "rgba(59, 130, 246, 0.05)", border: "1px solid rgba(59, 130, 246, 0.15)", borderRadius: "6px", padding: "0.4rem", display: "flex", alignItems: "center" }}>
                    <Icon name="users" size={16} className="gradient-text" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "0.8rem", fontWeight: "600" }}>350+ Professionals</h4>
                    <p style={{ fontSize: "0.7rem", color: "var(--text-muted)", marginTop: "0.1rem" }}>Deployed globally</p>
                  </div>
                </div>

                <div className={`${styles.heroFloatingCard} ${styles.card2}`}>
                  <div style={{ background: "rgba(212, 175, 55, 0.05)", border: "1px solid rgba(212, 175, 55, 0.15)", borderRadius: "6px", padding: "0.4rem", display: "flex", alignItems: "center" }}>
                    <Icon name="trending-up" size={16} style={{ color: "var(--color-secondary)" }} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "0.8rem", fontWeight: "600" }}>SLA Verified</h4>
                    <p style={{ fontSize: "0.7rem", color: "var(--text-muted)", marginTop: "0.1rem" }}>98.5% Adherence</p>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", fontWeight: "600", color: "var(--text-primary)", letterSpacing: "0.15em" }}>OUTPRO.INDIA</span>
                  <div style={{ width: "40px", height: "1px", background: "var(--color-secondary)" }}></div>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", letterSpacing: "0.05em" }}>OPERATIONAL HUB</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Metrics Section */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <div className={styles.metricsGrid}>
            {metrics.map((metric, idx) => (
              <div
                key={idx}
                className={`${styles.metricCard} glass-card reveal`}
                style={{ transitionDelay: `${idx * 0.08}s` }}
              >
                <div className={styles.metricNumber}>{metric.value}</div>
                <h4 className={styles.metricLabel}>{metric.label}</h4>
                <p className={styles.metricDesc}>{metric.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Services Overview Section */}
      <section className={styles.section}>
        <div className="container">
          <div className={`${styles.sectionHeader} reveal`}>
            <span className={styles.sectionSubtitle}>Operational Modules</span>
            <h2 className={styles.sectionTitle}>Bespoke Solutions Built for Corporate Growth</h2>
            <p className={styles.sectionDesc}>
              We construct compliant, secure, and highly managed operational frameworks to support your firm's long-term capability expansion.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service, idx) => (
              <div
                key={service.id}
                className={`${styles.serviceCard} glass-card reveal-${idx % 2 === 0 ? "left" : "right"}`}
              >
                <div className={styles.serviceIconWrapper}>
                  <Icon name={service.icon} size={20} />
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceText}>{service.shortDescription}</p>
                <Link href={`/services/${service.slug}`} className={styles.serviceLink}>
                  Explore Module Framework
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Portfolio / Case Studies Section */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <div className={`${styles.sectionHeader} reveal`}>
            <span className={styles.sectionSubtitle}>Verified Outcomes</span>
            <h2 className={styles.sectionTitle}>Corporate Performance Portfolios</h2>
            <p className={styles.sectionDesc}>
              Review empirical proof demonstrating how our custom staffing and automated architectures optimize operating costs and productivity.
            </p>
          </div>

          <div className={styles.portfolioGrid}>
            {portfolio.map((item, idx) => (
              <div
                key={item.id}
                className={`${styles.portfolioCard} glass-card reveal`}
                style={{ transitionDelay: `${idx * 0.08}s` }}
              >
                <div className={styles.portfolioVisual}>
                  <span className={styles.portfolioBadge}>{item.category}</span>
                  <div className={styles.portfolioKpi}>
                    <div className={styles.kpiVal}>{item.kpiValue}</div>
                    <div className={styles.kpiLbl}>{item.kpiMetric}</div>
                  </div>
                </div>
                <div className={styles.portfolioContent}>
                  <span className={styles.portfolioClient}>{item.client}</span>
                  <h3 className={styles.portfolioTitle}>{item.title}</h3>
                  <p className={styles.portfolioDesc}>{item.shortDescription}</p>
                  <Link href="/portfolio" className={styles.serviceLink} style={{ marginTop: "auto" }}>
                    Read Case Study
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Client Testimonials Section */}
      <section className={styles.section}>
        <div className="container">
          <div className={`${styles.sectionHeader} reveal`}>
            <span className={styles.sectionSubtitle}>Partner Endorsements</span>
            <h2 className={styles.sectionTitle}>Executive Perspectives</h2>
            <p className={styles.sectionDesc}>
              Understand how international business leaders utilize our strategic hubs to strengthen their corporate capabilities.
            </p>
          </div>

          <div className={styles.testimonialsGrid}>
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className={`${styles.testimonialCard} glass-card reveal-${idx % 2 === 0 ? "left" : "right"}`}
              >
                <svg className={styles.quoteIcon} width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.944.75c-3.149 1.776-4.944 4.544-4.944 6.975h4v9h-10v-5zm-13 0c0-5.141 3.892-10.519 10-11.725l.944.75c-3.149 1.776-4.944 4.544-4.944 6.975h4v9h-10v-5z" />
                </svg>
                <p className={styles.testimonialText}>
                  "{t.quote}"
                </p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorAvatar}>
                    {t.initials}
                  </div>
                  <div className={styles.authorMeta}>
                    <h5 className={styles.authorName}>{t.author}</h5>
                    <span className={styles.authorRole}>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Premium Call-To-Action (CTA) */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <div className={`${styles.ctaBox} glass-card reveal-scale`}>
            <h2 className={styles.ctaTitle}>Optimize Your Corporate Footprint</h2>
            <p className={styles.ctaText}>
              Schedule a strategic consultation with our architects to design, draft, and deploy your custom operational hub.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">
                <span>Request Strategic Consultation</span>
              </Link>
              <Link href="/about" className="btn-secondary">
                Review Our Identity
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
