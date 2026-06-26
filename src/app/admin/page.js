import { db } from "@/lib/db";
import styles from "@/styles/Admin.module.css";
import homeStyles from "@/styles/Home.module.css";

// Force Next.js to run this page dynamically on every request (crucial for real-time lead updates!)
export const dynamic = "force-dynamic";

export default function AdminDashboard() {
  const leads = db.getLeads();

  // Calculate statistics
  const totalLeads = leads.length;
  
  const staffingLeads = leads.filter(
    (l) => l.service_interest && l.service_interest.toLowerCase().includes("staffing")
  ).length;

  const bpoLeads = leads.filter(
    (l) => l.service_interest && (l.service_interest.toLowerCase().includes("bpo") || l.service_interest.toLowerCase().includes("operations"))
  ).length;

  const techLeads = leads.filter(
    (l) => l.service_interest && (l.service_interest.toLowerCase().includes("tech") || l.service_interest.toLowerCase().includes("consulting") || l.service_interest.toLowerCase().includes("digital"))
  ).length;

  // Badge class selector based on interest
  const getBadgeClass = (interest = "") => {
    const val = interest.toLowerCase();
    if (val.includes("staffing")) return styles.badgeStaffing;
    if (val.includes("bpo") || val.includes("operations")) return styles.badgeBpo;
    if (val.includes("tech") || val.includes("digital") || val.includes("consulting")) return styles.badgeTech;
    return styles.badgeGeneral;
  };

  // Format date
  const formatDate = (isoString) => {
    try {
      const date = new Date(isoString);
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    } catch (e) {
      return "N/A";
    }
  };

  return (
    <div className="container" style={{ minHeight: "80vh" }}>
      {/* Portal Header */}
      <header className={styles.headerSection}>
        <div>
          <h1 className={styles.title}>Outpro Operations Hub</h1>
          <p className={styles.subtitle}>Secure administration dashboard for managing client inquiries & lead pipelines.</p>
        </div>
        <div style={{ padding: "0.5rem 1rem", background: "rgba(16, 185, 129, 0.1)", border: "1px solid var(--color-success)", borderRadius: "8px", color: "var(--color-success)", fontSize: "0.85rem", fontWeight: "600" }}>
          System Online
        </div>
      </header>

      {/* Stats Summary Panel */}
      <section className={styles.statsGrid}>
        <div className={`${styles.statCard} glass-card`}>
          <div className={styles.statVal}>{totalLeads}</div>
          <h4 className={styles.statLabel}>Total Inquiries</h4>
        </div>

        <div className={`${styles.statCard} glass-card`}>
          <div className={styles.statVal} style={{ color: "var(--color-primary)" }}>{staffingLeads}</div>
          <h4 className={styles.statLabel}>Staffing leads</h4>
        </div>

        <div className={`${styles.statCard} glass-card`}>
          <div className={styles.statVal} style={{ color: "var(--color-secondary)" }}>{bpoLeads}</div>
          <h4 className={styles.statLabel}>BPO/Ops Leads</h4>
        </div>

        <div className={`${styles.statCard} glass-card`}>
          <div className={styles.statVal} style={{ color: "var(--color-accent)" }}>{techLeads}</div>
          <h4 className={styles.statLabel}>Tech/IT Leads</h4>
        </div>
      </section>

      {/* Leads Record Table */}
      <section className={styles.tableContainer}>
        <div className={styles.tableHeader}>
          <h3 className={styles.tableTitle}>Submitted Project Inquiries</h3>
          <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Records auto-sorted by date (newest first)</span>
        </div>

        <div className={styles.tableWrapper}>
          {leads.length === 0 ? (
            <div className={styles.emptyState}>
              <svg className={styles.emptyIcon} width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              <h3>No Inquiries Captured Yet</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", maxWidth: "300px" }}>
                Submit a test inquiry through our <a href="/contact" style={{ color: "var(--color-primary)", textDecoration: "underline" }}>Contact Page</a> to populate the dashboard!
              </p>
            </div>
          ) : (
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.th}>Client / Company</th>
                  <th className={styles.th}>Contact Info</th>
                  <th className={styles.th}>Module Interest</th>
                  <th className={styles.th}>Project Objectives</th>
                  <th className={styles.th}>Received Date</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr key={lead.id} className={styles.tr}>
                    
                    {/* Client Name & Company */}
                    <td className={styles.td}>
                      <div className={styles.leadName}>{lead.name}</div>
                      <div className={styles.leadMeta}>{lead.company}</div>
                    </td>

                    {/* Email & Phone */}
                    <td className={styles.td}>
                      <div style={{ color: "var(--text-primary)" }}>{lead.email}</div>
                      <div style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginTop: "0.25rem" }}>{lead.phone}</div>
                    </td>

                    {/* Service Interest Badge */}
                    <td className={styles.td}>
                      <span className={`${styles.badge} ${getBadgeClass(lead.service_interest)}`}>
                        {lead.service_interest.replace(" Solutions", "").replace(" Strategy & Advisory", "")}
                      </span>
                    </td>

                    {/* Message Details */}
                    <td className={styles.td}>
                      <p className={styles.leadMsg}>{lead.message}</p>
                    </td>

                    {/* Date Received */}
                    <td className={styles.td} style={{ color: "var(--text-muted)", fontSize: "0.85rem", whiteSpace: "nowrap" }}>
                      {formatDate(lead.created_at)}
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>
    </div>
  );
}
