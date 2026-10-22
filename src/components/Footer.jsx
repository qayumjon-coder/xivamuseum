import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#111418] text-white mt-16">
      <div className="container mb-0! mt-0!">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-14 border-b border-white/10">
          {/* Logo + Location */}
          <div className="flex flex-col gap-4">
            <Link to="/">
              <img
                src="/logo.png"
                alt="Xiva Museum Logo"
                className="w-20 h-14 object-contain"
              />
            </Link>
            <div>
              <h3 className="text-white font-bold text-lg border-b-2 border-[#E8A422] pb-1 mb-3 inline-block">
                Joylashuv
              </h3>
              <p className="text-white/70 text-sm flex items-start gap-2 mt-2">
                <svg
                  className="w-4 h-4 mt-0.5 shrink-0 text-[#E8A422]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span>41 Boltaeva ko'chasi, Xiva, Xorazm viloyati</span>
              </p>
            </div>
            <button className="mt-2 px-5 py-2.5 bg-[#E8A422] hover:bg-[#d4921b] text-black font-semibold rounded text-sm transition-colors w-fit">
              Xaritada ochish
            </button>
          </div>

          {/* Useful Links 1 */}
          <div>
            <h3 className="text-white font-bold text-lg border-b-2 border-[#E8A422] pb-1 mb-5 inline-block">
              Foydali havolalar
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Bosh sahifa", to: "/" },
                { label: "Biz haqimizda", to: "/biz-haqimizda" },
                { label: "Yangiliklar", to: "/yangiliklar" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-white/70 hover:text-[#E8A422] text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links 2 */}
          <div>
            <h3 className="text-white font-bold text-lg border-b-2 border-[#E8A422] pb-1 mb-5 inline-block">
              Foydali havolalar
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Muzey kolleksiyasi", to: "/kolleksiya" },
                { label: "Galereya", to: "/galereya" },
                { label: "Biz bilan bog'lanish", to: "/aloqa" },
                { label: "Xiva 360°", to: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-white/70 hover:text-[#E8A422] text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-bold text-lg border-b-2 border-[#E8A422] pb-1 mb-5 inline-block">
              Ijtimoiy tarmoqlar
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                {
                  label: "Instagram",
                  href: "#",
                  icon: (
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  ),
                },
                {
                  label: "Facebook",
                  href: "#",
                  icon: (
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  ),
                },
                {
                  label: "Telegram",
                  href: "#",
                  icon: (
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                  ),
                },
                {
                  label: "YouTube",
                  href: "#",
                  icon: (
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className="flex items-center gap-2.5 text-white/70 hover:text-[#E8A422] text-sm transition-colors"
                  >
                    {social.icon}
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between py-5 text-sm text-white/50">
          <span>© 2025. Barcha huquqlar himoyalangan</span>
          <a
            href="#top"
            className="w-9 h-9 border border-white/20 rounded flex items-center justify-center hover:border-[#E8A422] hover:text-[#E8A422] transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 14l5-5 5 5H7z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
