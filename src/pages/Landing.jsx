import BigSwiper from "../components/BigSwiper";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router";

/* ── Dummy ma'lumotlar (keyinchalik API bilan almashtiriladi) ── */
const collectionItems = [
  {
    id: 1,
    title: "AN'ANAVIY KERAMIKA VA UY IDISHLARI",
    description:
      "Xiva keramikasi o'zining moviy va kobalt-ko'k sirlari, nozik naqshlari va mustahkamligi bilan mashhur. Bu idishlar, lagandardlar va ko'zalar uylarda va madrasalarda foydalanilgan, ko'pincha Xorazm mintaqasiga xos gulsimon yoki geometrik naqshlar bilan bezatilgan.",
    image: "/images/ceramics.jpg",
    fallback: "https://picsum.photos/seed/ceramic/600/400",
  },
  {
    id: 2,
    title: "TARIXIY TO'QIMACHILIK VA KIYIMLAR",
    description:
      "Ipak ikat xalatlar (chapan), kashtali bosh kiyimlar va qo'lda to'qilgan kamarlar oddiy fuqarolar va zodagonlar kiyimining ajralmas qismi edi. Tabiiy bo'yoqlar va noyob rang kombinatsiyalari har bir buyumga tarixiy xarakter beradi.",
    image: "/images/textiles.jpg",
    fallback: "https://picsum.photos/seed/textile/600/400",
  },
  {
    id: 3,
    title: "TARIXIY QUROL-YAROG' VA ZIRH",
    description:
      "Xiva jangchilari, saroy soqchilari va zodagonlar tomonidan ishlatiladigan qilichlar, xanjarlar, kamonlar va zanjirli zirhlarni o'rganing. Bu buyumlar nafaqat himoya vositasi, balki kumush bezaklari va yozuvlari bilan marosim buyumlari sifatida ham xizmat qilgan.",
    image: "/images/weapons.jpg",
    fallback: "https://picsum.photos/seed/weapon/600/400",
  },
];

const stats = [
  { icon: "🏛️", label: "1000+ yillik yodgorliklar", value: "2941" },
  { icon: "🏺", label: "Xiva eksklyuziv yodgorliklari", value: "460" },
  { icon: "🎵", label: "Ipak yo'li yodgorliklari", value: "11031" },
  { icon: "📚", label: "Tadqiqot loyihalari", value: "78" },
];

/* ── Yordamchi komponentlar ── */

/** Statistika kartasi */
const StatCard = ({ icon, label, value }) => (
  <div
    style={{
      backgroundColor: "var(--card-bg)",
      border: "1px solid var(--card-border)",
      borderRadius: 12,
      padding: "28px 20px",
      textAlign: "center",
      transition: "border-color 0.2s, background-color 0.2s",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = "var(--accent)";
      e.currentTarget.style.backgroundColor = "var(--card-hover)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = "var(--card-border)";
      e.currentTarget.style.backgroundColor = "var(--card-bg)";
    }}
  >
    <div
      style={{
        width: 56,
        height: 56,
        borderRadius: "50%",
        border: "2px solid var(--line)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 24,
        margin: "0 auto 16px",
      }}
    >
      {icon}
    </div>
    <p
      style={{
        color: "var(--accent)",
        fontSize: "0.8125rem",
        marginBottom: 8,
      }}
    >
      {label}
    </p>
    <p
      style={{
        color: "var(--ink)",
        fontSize: "2rem",
        fontWeight: 700,
      }}
    >
      {value}
    </p>
  </div>
);

/** Kolleksiya qatori */
const CollectionRow = ({ item }) => (
  <div
    style={{
      display: "flex",
      gap: 36,
      alignItems: "flex-start",
      flexWrap: "wrap",
    }}
  >
    <div style={{ width: 320, flexShrink: 0 }}>
      <img
        src={item.image}
        alt={item.title}
        style={{
          width: "100%",
          height: 240,
          objectFit: "cover",
          borderRadius: 10,
        }}
        onError={(e) => (e.target.src = item.fallback)}
      />
    </div>
    <div style={{ flex: 1 }}>
      <h3
        style={{
          color: "var(--ink)",
          fontSize: "1.375rem",
          fontWeight: 700,
          textTransform: "uppercase",
          marginBottom: 16,
          lineHeight: 1.3,
        }}
      >
        {item.title}
      </h3>
      <p
        style={{
          color: "var(--ink-muted)",
          fontSize: "0.9375rem",
          lineHeight: 1.75,
          marginBottom: 24,
        }}
      >
        {item.description}
      </p>
      <hr style={{ border: "none", borderTop: "1px solid var(--divider)", marginBottom: 20 }} />
      <Link to="/kolleksiya" className="btn-outline">
        Batafsil
        <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
        </svg>
      </Link>
    </div>
  </div>
);

/* ── Asosiy sahifa ── */
const Landing = () => (
  <div style={{ minHeight: "100vh", backgroundColor: "var(--bg)" }} id="top">
    <Header />

    {/* Hero Slider */}
    <div className="container" style={{ marginTop: 24, marginBottom: 0 }}>
      <BigSwiper />
    </div>

    {/* ── Haqida bo'lim ── */}
    <section
      className="container section-py"
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}
    >
      <div>
        <h2
          style={{
            color: "var(--ink)",
            fontSize: "2.25rem",
            fontWeight: 700,
            textTransform: "uppercase",
            lineHeight: 1.25,
            marginBottom: 20,
          }}
        >
          XIVA MUZEYI –<br />1970 YILDAN TARIX MEROSI
        </h2>
        <p
          style={{
            color: "var(--ink-muted)",
            fontSize: "0.9375rem",
            lineHeight: 1.75,
            marginBottom: 12,
          }}
        >
          1970 yilda tashkil etilgan Xiva muzeyi Xiva va uning atrofidagi boy tarix va
          madaniy merosni saqlab va namoyish etishga bag'ishlangan yetakchi madaniy va
          ta'lim muassasasidir.
        </p>
        <p
          style={{
            color: "var(--ink-muted)",
            fontSize: "0.9375rem",
            lineHeight: 1.75,
            marginBottom: 32,
          }}
        >
          Ko'p tarmoqli markaz sifatida muzey tadqiqot, saqlash va jamoat ta'limida
          muhim rol o'ynaydi. U Xivaning o'tmishining badiiy, me'moriy va kundalik
          hayot an'analarini ifodalovchi keng ko'lamli artefaktlar to'plamini o'z
          ichiga oladi.
        </p>
        <div style={{ display: "flex", gap: 12 }}>
          <Link to="/chipta" className="btn-primary">
            Chipta olish
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
            </svg>
          </Link>
          <Link to="/biz-haqimizda" className="btn-outline">
            Batafsil
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Rasm grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {["/images/xiva-1.jpg", "/images/xiva-2.jpg"].map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Xiva ${i + 1}`}
            style={{ borderRadius: 10, width: "100%", height: 200, objectFit: "cover" }}
            onError={(e) => (e.target.src = `https://picsum.photos/seed/${i + 5}/600/400`)}
          />
        ))}
        <img
          src="/images/xiva-3.jpg"
          alt="Xiva 3"
          style={{
            borderRadius: 10,
            width: "100%",
            height: 200,
            objectFit: "cover",
            gridColumn: "1 / -1",
          }}
          onError={(e) => (e.target.src = "https://picsum.photos/seed/7/1200/400")}
        />
      </div>
    </section>

    {/* ── Statistika ── */}
    <section style={{ backgroundColor: "var(--surface-2)", padding: "52px 0" }}>
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 16,
        }}
      >
        {stats.map((s, i) => (
          <StatCard key={i} {...s} />
        ))}
      </div>
    </section>

    {/* ── Kolleksiya preview ── */}
    <section className="container section-py">
      <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
        {collectionItems.map((item, idx) => (
          <div key={item.id}>
            <CollectionRow item={item} />
            {idx < collectionItems.length - 1 && (
              <hr
                style={{
                  border: "none",
                  borderTop: "1px solid var(--divider)",
                  marginTop: 48,
                }}
              />
            )}
          </div>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 32 }}>
        <Link to="/kolleksiya" className="btn-outline">
          Batafsil
          <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
          </svg>
        </Link>
      </div>
    </section>

    {/* ── Galereya preview ── */}
    <section className="container" style={{ paddingBottom: 64 }}>
      <h2
        style={{
          color: "var(--ink)",
          fontSize: "2rem",
          fontWeight: 700,
          textTransform: "uppercase",
          marginBottom: 28,
        }}
      >
        GALEREYA
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 12,
        }}
      >
        {[
          "/images/xiva-1.jpg",
          "/images/xiva-2.jpg",
          "/images/xiva-3.jpg",
          "/images/xiva-1.jpg",
          "/images/xiva-2.jpg",
          "/images/xiva-3.jpg",
        ].map((src, i) => (
          <div
            key={i}
            style={{ overflow: "hidden", borderRadius: 10 }}
          >
            <img
              src={src}
              alt={`Gallery ${i + 1}`}
              style={{
                width: "100%",
                height: 220,
                objectFit: "cover",
                transition: "transform 0.5s",
                display: "block",
              }}
              onError={(e) =>
                (e.target.src = `https://picsum.photos/seed/${i + 20}/800/600`)
              }
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.06)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 20 }}>
        <Link to="/galereya" className="btn-outline">
          Batafsil
          <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
          </svg>
        </Link>
      </div>
    </section>

    <Footer />
  </div>
);

export default Landing;
