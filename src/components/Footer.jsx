import { Link } from "react-router";

const Footer = () => {
  return (
    <footer
      id="footer"
      style={{
        backgroundColor: "var(--footer-bg)",
        color: "var(--footer-ink)",
        marginTop: 64,
      }}
    >
      <div className="container" style={{ padding: "56px 24px 0" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 48,
            paddingBottom: 48,
            borderBottom: "1px solid var(--footer-line)",
          }}
        >
          {/* Logo + Manzil */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Link to="/">
              <img
                src="/logo.png"
                alt="Xiva Museum Logo"
                style={{ width: 72, height: 52, objectFit: "contain" }}
              />
            </Link>
            <div>
              <h3
                style={{
                  color: "var(--footer-ink)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  paddingBottom: 6,
                  marginBottom: 10,
                  borderBottom: "2px solid var(--accent)",
                  display: "inline-block",
                }}
              >
                Joylashuv
              </h3>
              <p
                style={{
                  color: "var(--footer-ink-muted)",
                  fontSize: "0.875rem",
                  lineHeight: 1.6,
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 8,
                  marginTop: 8,
                }}
              >
                <svg
                  style={{
                    width: 16,
                    height: 16,
                    marginTop: 2,
                    flexShrink: 0,
                    color: "var(--accent)",
                  }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                41 Boltaeva ko'chasi, Xiva, Xorazm viloyati
              </p>
            </div>
            <button
              style={{
                marginTop: 8,
                padding: "10px 20px",
                backgroundColor: "var(--accent)",
                color: "var(--on-accent)",
                fontWeight: 600,
                fontSize: "0.875rem",
                border: "none",
                borderRadius: 6,
                cursor: "pointer",
                width: "fit-content",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--accent-hover)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--accent)")
              }
            >
              Xaritada ochish
            </button>
          </div>

          {/* Foydali havolalar 1 */}
          <div>
            <h3
              style={{
                color: "var(--footer-ink)",
                fontWeight: 700,
                fontSize: "1rem",
                paddingBottom: 6,
                marginBottom: 20,
                borderBottom: "2px solid var(--accent)",
                display: "inline-block",
              }}
            >
              Foydali havolalar
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { label: "Bosh sahifa", to: "/" },
                { label: "Biz haqimizda", to: "/biz-haqimizda" },
                { label: "Yangiliklar", to: "/yangiliklar" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    style={{
                      color: "var(--footer-ink-muted)",
                      fontSize: "0.875rem",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--accent)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--footer-ink-muted)")
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Foydali havolalar 2 */}
          <div>
            <h3
              style={{
                color: "var(--footer-ink)",
                fontWeight: 700,
                fontSize: "1rem",
                paddingBottom: 6,
                marginBottom: 20,
                borderBottom: "2px solid var(--accent)",
                display: "inline-block",
              }}
            >
              Foydali havolalar
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { label: "Muzey kolleksiyasi", to: "/kolleksiya" },
                { label: "Galereya", to: "/galereya" },
                { label: "Biz bilan bog'lanish", to: "/aloqa" },
                { label: "Xiva 360°", to: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    style={{
                      color: "var(--footer-ink-muted)",
                      fontSize: "0.875rem",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--accent)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--footer-ink-muted)")
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ijtimoiy tarmoqlar */}
          <div>
            <h3
              style={{
                color: "var(--footer-ink)",
                fontWeight: 700,
                fontSize: "1rem",
                paddingBottom: 6,
                marginBottom: 20,
                borderBottom: "2px solid var(--accent)",
                display: "inline-block",
              }}
            >
              Ijtimoiy tarmoqlar
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                {
                  label: "Instagram",
                  href: "#",
                  icon: (
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  ),
                },
                {
                  label: "Facebook",
                  href: "#",
                  icon: (
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  ),
                },
                {
                  label: "Telegram",
                  href: "#",
                  icon: (
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                  ),
                },
                {
                  label: "YouTube",
                  href: "#",
                  icon: (
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z" />
                    </svg>
                  ),
                },
              ].map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      color: "var(--footer-ink-muted)",
                      fontSize: "0.875rem",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--accent)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--footer-ink-muted)")
                    }
                  >
                    {s.icon}
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pastki bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "18px 0",
            fontSize: "0.8125rem",
            color: "var(--footer-ink-muted)",
          }}
        >
          <span>© 2025. Barcha huquqlar himoyalangan</span>
          <a
            href="#top"
            style={{
              width: 36,
              height: 36,
              border: "1px solid var(--footer-line)",
              borderRadius: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--footer-ink-muted)",
              textDecoration: "none",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--footer-line)";
              e.currentTarget.style.color = "var(--footer-ink-muted)";
            }}
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 14l5-5 5 5H7z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
