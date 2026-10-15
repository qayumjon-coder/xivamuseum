import React, { useState } from "react";
import { GoPerson } from "react-icons/go";
import { IoTicketOutline } from "react-icons/io5";
import { RiPhoneLine } from "react-icons/ri";
import { RxPerson } from "react-icons/rx";
import { Link, NavLink } from "react-router";

const Header = () => {
  const [langOpen, setLangOpen] = useState(false);
  const [bizOpen, setBizOpen] = useState(false);
  const [yangOpen, setYangOpen] = useState(false);

  return (
    <header className="w-full font-sans pt-px shadow-xl shadow-black/30">
      <div className="border-b border-line bg-bg">
        <div className="container mb-0! mt-0! px-5 ">
          <div className=" flex justify-between py-2">
            {/* Left: Logo + links */}
            <div className="flex items-center gap-5">
              {/* Logo - arch shaped with city silhouette */}
              <Link to="/" className="flex items-center gap-2 group">
                <div className="relative flex items-center justify-center">
                  <img
                    className="w-25 h-17.5!"
                    src="/logo.png"
                    alt="Xiva Museum Logo"
                  />
                </div>
              </Link>

              {/* Khiva 360° - VR headset icon */}
              <button className="flex items-center gap-1.5 text-ink hover:text-ink-muted transition-colors text-sm font-medium">
                <span className="text-ink">
                  {/* VR Headset icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="16"
                    className="fill-[#1c2733] hover:text-ink-muted"
                    viewBox="0 0 62 40"
                  >
                    <path d="M53.4 5.5h-44c-2.1 0-3.7 1.7-3.7 3.7v22.6c0 2.1 1.7 3.7 3.7 3.7h13.4c1.1 0 2.1-.6 2.5-1.6l3-7.5c1.2-2.6 4.9-2.5 6 .1l2.6 7.3c.4 1 1.4 1.7 2.5 1.7h13.9c2.1 0 3.7-1.7 3.7-3.7V9.3c.2-2.1-1.5-3.8-3.6-3.8zM20.4 27c-3.2 0-5.7-2.6-5.7-5.7s2.6-5.7 5.7-5.7 5.7 2.6 5.7 5.7-2.5 5.7-5.7 5.7zm22 0c-3.2 0-5.7-2.6-5.7-5.7s2.6-5.7 5.7-5.7 5.7 2.6 5.7 5.7-2.5 5.7-5.7 5.7z"></path>
                  </svg>
                </span>
                <span>Khiva 360°</span>
              </button>

              {/* Khiva Museum Shop */}
              <button className="transition-colors text-sm font-medium">
                Khiva Museum Shop
              </button>
            </div>

            {/* Right: socials + phone + language */}
            <div className="flex items-center gap-4">
              {/* Social icons */}
              <div className="flex items-center gap-3">
                {/* YouTube */}
                <a
                  href="#"
                  className="text-ink hover:text-accent transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="#"
                  className="text-ink hover:text-accent transition-colors"
                >
                  <svg
                    className="w-3.25 h-3.25"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                {/* Email */}
                <a
                  href="#"
                  className="text-text-wt hover:text-accent transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </a>
              </div>

              {/* Phone */}
              <a
                href="tel:+998556046343"
                className="flex items-center gap-1.5 text-text-wt white hover:text-white transition-colors font-medium"
              >
                <RiPhoneLine size={20} />
                +998556046343
              </a>

              <div className="h-4 w-px" />

              {/* Language selector */}
              <div className="relative">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-2 text-text-wt cursor-pointer transition-colors font-medium"
                >
                  <span>O'zbek</span>
                  <svg
                    className={`w-3 h-3 transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M7 10l5 5 5-5H7z" />
                  </svg>
                </button>
                {langOpen && (
                  <div className="absolute right-0 top-full mt-2 w-36 bg-[#222] border border-white/10 rounded-lg shadow-2xl z-50 overflow-hidden">
                    {[
                      { code: "🇺🇿", label: "O'zbek" },
                      { code: "🇷🇺", label: "Русский" },
                      { code: "🇬🇧", label: "English" },
                    ].map((lang) => (
                      <button
                        key={lang.label}
                        onClick={() => setLangOpen(false)}
                        className="w-full flex items-center gap-2 px-3 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                      >
                        <span>{lang.code}</span>
                        <span>{lang.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Nav links */}
          <nav className="flex items-center gap-5">
            <div className="relative">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `px-4 py-2 block text-sm font-bold uppercase transition-colors rounded-sm text-text-wt hover:text-white/85"}`
                }
              >
                {({ isActive }) => (
                  <span className="flex flex-col items-center gap-1">
                    <span>Bosh sahifa</span>
                    {isActive && <span className="inline-block w-full h-0.5 bg-accent/60"></span>}
                  </span>
                )}
              </NavLink>
            </div>

            {/* Biz haqimizda dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setBizOpen(!bizOpen);
                  setYangOpen(false);
                }}
                className="flex items-center gap-1 px-4 py-7 text-sm font-bold tracking-wider uppercase text-text-wt hover:text-white transition-colors"
              >
                Biz haqimizda
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${bizOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7 10l5 5 5-5H7z" />
                </svg>
              </button>
              {bizOpen && (
                <div className="absolute left-0 top-full mt-1 w-52 bg-[#222] border border-white/10 rounded-lg shadow-2xl z-50 overflow-hidden">
                  {[
                    "Muzey tarixi",
                    "Missiya va maqsad",
                    "Jamoa",
                    "Hamkorlar",
                  ].map((item) => (
                    <Link
                      key={item}
                      to="#"
                      onClick={() => setBizOpen(false)}
                      className="block px-4 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink
              to="/kolleksiya"
              className={({ isActive }) =>
                `px-4 py-7 block text-sm font-bold tracking-wider uppercase transition-colors rounded-sm ${isActive ? "text-accent" : "text-text-wt hover:text-white/85"
                }`
              }
            >
              Muzey kolleksiyasi
            </NavLink>

            <NavLink
              to="/galereya"
              className={({ isActive }) =>
                `px-4 py-7 block text-sm font-bold tracking-wider uppercase transition-colors rounded-sm ${isActive ? "text-accent" : "text-text-wt hover:text-white/85"
                }`
              }
            >
              Galereya
            </NavLink>

            {/* Yangiliklar dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setYangOpen(!yangOpen);
                  setBizOpen(false);
                }}
                className="flex items-center gap-1 px-4 py-7 text-sm font-bold tracking-wider uppercase text-text-wt hover:text-white transition-colors"
              >
                Yangiliklar
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${yangOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7 10l5 5 5-5H7z" />
                </svg>
              </button>
              {yangOpen && (
                <div className="absolute left-0 top-full mt-1 w-48 bg-[#222] border border-white/10 rounded-lg shadow-2xl z-50 overflow-hidden">
                  {["So'nggi yangiliklar", "E'lonlar", "Tadbirlar"].map(
                    (item) => (
                      <Link
                        key={item}
                        to="#"
                        onClick={() => setYangOpen(false)}
                        className="block px-4 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                      >
                        {item}
                      </Link>
                    ),
                  )}
                </div>
              )}
            </div>

            <NavLink
              to="/aloqa"
              className={({ isActive }) =>
                `px-4 py-7 block text-sm font-bold tracking-wider uppercase transition-colors rounded-sm ${isActive ? "text-accent" : "text-text-wt hover:text-white/85"
                }`
              }
            >
              Aloqa
            </NavLink>
          </nav>

          {/* Right: Chipta olish + User */}
          <div className="flex items-center gap-px">
            <Link
              to="/chipta"
              className="flex items-center gap-2 px-5 py-3 bg-accent hover:bg-[#d08e28] text-white text-sm font-semibold rounded-l-md transition-all duration-200 tracking-wide"
            >
              <span>Chipta olish</span>
              {/* Ticket/Tag icon */}
              <IoTicketOutline size={20} />
            </Link>

            <button className="w-11 py-3 flex items-center justify-center rounded-r-md hover:bg-[#d08e28] cursor-pointer bg-accent text-text-wt hover:text-white transition-all duration-200">
              <RxPerson size={20} strokeWidth={0.25} />
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop to close dropdowns */}
      {(bizOpen || yangOpen || langOpen) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setBizOpen(false);
            setYangOpen(false);
            setLangOpen(false);
          }}
        />
      )}
    </header>
  );
};

export default Header;
