import BigSwiper from "../components/BigSwiper";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router";

const collectionItems = [
  {
    id: 1,
    title: "AN'ANAVIY KERAMIKA VA UY IDISHLARI",
    description:
      "Xiva keramikasi o'zining moviy va kobalt-ko'k sirlari, nozik naqshlari va mustahkamligi bilan mashhur. Bu idishlar, lagandardlar va ko'zalar uylarda va madrasalarda foydalanilgan.",
    image: "/images/ceramics.jpg",
  },
  {
    id: 2,
    title: "TARIXIY TO'QIMACHILIK VA KIYIMLAR",
    description:
      "Ipak ikat xalatlar (chapan), kashtali bosh kiyimlar va qo'lda to'qilgan kamarlar oddiy fuqarolar va zodagonlar kiyimining ajralmas qismi edi. Bu kiyimlar ijtimoiy mavqe va mintaqaviy o'ziga xoslikni aks ettirgan.",
    image: "/images/textiles.jpg",
  },
  {
    id: 3,
    title: "TARIXIY QUROL-YAROG' VA ZIRH",
    description:
      "Xiva jangchilari, saroy soqchilari va zodagonlar tomonidan ishlatiladigan qilichlar, xanjarlar, kamonlar va zanjirli zirhlarni o'rganing. Bu buyumlar nafaqat himoya vositasi, balki hunarmandlik mahoratini ham namoyish etardi.",
    image: "/images/weapons.jpg",
  },
];

const stats = [
  {
    icon: <img src="/stats/stat-1.png" />,
    label: "1000+ yillik yodgorliklar",
    value: "2941",
  },
  {
    icon: <img src="/stats/stat-2.png" />,
    label: "Xiva eksklyuziv yodgorliklari",
    value: "460",
  },
  {
    icon: <img src="/stats/stat-3.png" />,
    label: "Ipak yo'li yodgorliklari",
    value: "11031",
  },
  {
    icon: <img src="/stats/stat-4.png" />,
    label: "Tadqiqot loyihalari",
    value: "78",
  },
];

const galleryImages = [
  "/images/xiva-1.jpg",
  "/images/xiva-2.jpg",
  "/images/xiva-3.jpg",
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
];

const Landing = () => {
  return (
    <div className="min-h-screen bg-bg" id="top">
      <Header />

      {/* Hero Slider */}
      <div className="container">
        <BigSwiper />
      </div>

      {/* About Section */}
      <section className="container py-16 mt-40!">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-ink text-4xl font-bold uppercase leading-tight mb-6">
              XIVA MUZEYI – 1970 YILDAN TARIХ MEROSI
            </h2>
            <p className="text-ink/70 text-sm leading-relaxed mb-4">
              1970 yilda tashkil etilgan Xiva muzeyi Xiva va uning atrofidagi
              boy tarix va madaniy merosni saqlab va namoyish etishga
              bag'ishlangan yetakchi madaniy va ta'lim muassasasidir.
            </p>
            <p className="text-ink/70 text-sm leading-relaxed mb-8">
              Ko'p tarmoqli markaz sifatida muzey tadqiqot, saqlash va jamoat
              ta'limida muhim rol o'ynaydi. U Xivaning o'tmishining badiiy,
              me'moriy va kundalik hayot an'analarini ifodalovchi keng ko'lamli
              artefaktlar to'plamini o'z ichiga oladi.
            </p>
            <div className="flex gap-4">
              <Link
                to="/chipta"
                className="px-6 py-3 bg-accent hover:bg-accent-hover text-black font-semibold rounded text-sm transition-colors flex items-center gap-2"
              >
                Chipta olish
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
                </svg>
              </Link>
              <Link
                to="/biz-haqimizda"
                className="px-6 py-3 border-dashed border border-accent text-accent hover:bg-[#E8A422]/10 font-semibold rounded text-sm transition-colors flex items-center gap-2"
              >
                Batafsil
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img
              src="/images/xiva-1.jpg"
              alt="Xiva museum"
              className="rounded-lg object-cover w-full h-52"
            />
            <img
              src="/images/xiva-2.jpg"
              alt="Xiva artifacts"
              className="rounded-lg object-cover w-full h-52"
            />
            <img
              src="/images/xiva-3.jpg"
              alt="Xiva architecture"
              className="rounded-lg object-cover w-full h-52 col-span-2"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#13161e] py-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-[#1a1d24] rounded-xl p-6 text-center border border-white/5 hover:border-[#E8A422]/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-full border-2 border-white/20 flex items-center justify-center text-2xl mx-auto mb-4">
                  {stat.icon}
                </div>
                <p className="text-white/60 text-xs mb-2">{stat.label}</p>
                <p className="text-white text-3xl font-bold">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collection Preview */}
      <section className="container py-16">
        <div className="flex flex-col gap-10">
          {collectionItems.map((item, idx) => (
            <div key={item.id}>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-80 shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-lg object-cover w-full h-60"
                    onError={(e) => {
                      e.target.src = `https://picsum.photos/seed/${item.id + 10}/600/400`;
                    }}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-2xl font-bold uppercase mb-4">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <div className="border-t border-white/10 pt-4">
                    <Link
                      to="/kolleksiya"
                      className="flex items-center gap-2 text-[#E8A422] border border-[#E8A422] hover:bg-[#E8A422]/10 px-4 py-2 rounded text-sm font-medium transition-colors w-fit"
                    >
                      Batafsil
                      <svg
                        className="w-3.5 h-3.5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              {idx < collectionItems.length - 1 && (
                <hr className="border-white/10 mt-10" />
              )}
            </div>
          ))}
        </div>
        <div className="text-right mt-6">
          <Link
            to="/kolleksiya"
            className="flex items-center gap-2 text-[#E8A422] border border-[#E8A422] hover:bg-[#E8A422]/10 px-4 py-2 rounded text-sm font-medium transition-colors w-fit ml-auto"
          >
            Batafsil
            <svg
              className="w-3.5 h-3.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="container py-8">
        <h2 className="text-white text-4xl font-bold uppercase mb-8">
          GALEREYA
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            "/images/xiva-1.jpg",
            "/images/xiva-2.jpg",
            "/images/xiva-3.jpg",
            "/images/xiva-1.jpg",
            "/images/xiva-2.jpg",
            "/images/xiva-3.jpg",
          ].map((src, i) => (
            <div key={i} className="overflow-hidden rounded-lg">
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = `https://picsum.photos/seed/${i + 20}/800/600`;
                }}
              />
            </div>
          ))}
        </div>
        <div className="text-right mt-6">
          <Link
            to="/galereya"
            className="flex items-center gap-2 text-[#E8A422] border border-[#E8A422] hover:bg-[#E8A422]/10 px-4 py-2 rounded text-sm font-medium transition-colors w-fit ml-auto"
          >
            Batafsil
            <svg
              className="w-3.5 h-3.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
