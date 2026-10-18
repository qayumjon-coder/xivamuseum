import React, { useState } from "react";
import { IoTicketOutline } from "react-icons/io5";
import { RiPhoneLine } from "react-icons/ri";
import { RxPerson } from "react-icons/rx";
import { Link, NavLink } from "react-router";

const Header = () => {
  const [langOpen, setLangOpen] = useState(false);
  const [bizOpen, setBizOpen] = useState(false);
  const [yangOpen, setYangOpen] = useState(false);

  const dropdownStyle = {
    position: "absolute",
    left: 0,
    top: "100%",
    marginTop: 4,
    minWidth: 210,
    backgroundColor: "var(--brand)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 8,
    boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
    zIndex: 50,
    overflow: "hidden",
  };

  const dropdownItemStyle = {
    display: "block",
    padding: "10px 16px",
    fontSize: "0.875rem",
    color: "var(--on-brand)",
    opacity: 0.8,
    textDecoration: "none",
    transition: "background-color 0.15s, opacity 0.15s",
  };

  return (
    <header
      style={{ width: "100%", boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}
    >
      {/* ── Top bar ── */}
      <div
        style={{
          backgroundColor: "var(--topbar-bg)",
          borderBottom: "1px solid var(--topbar-line)",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "8px 0",
            }}
          >
            {/* Sol tomon: logo + xizmatlar */}
            <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
              <Link to="/" style={{ display: "flex", alignItems: "center" }}>
                <img
                  src="/logo.png"
                  alt="Xiva Museum Logo"
                  style={{ width: 90, height: 64, objectFit: "contain" }}
                />
              </Link>

              {/* Khiva 360° */}
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "var(--ink)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  transition: "color 0.2s",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 62 40"
                >
                  <path d="M53.4 5.5h-44c-2.1 0-3.7 1.7-3.7 3.7v22.6c0 2.1 1.7 3.7 3.7 3.7h13.4c1.1 0 2.1-.6 2.5-1.6l3-7.5c1.2-2.6 4.9-2.5 6 .1l2.6 7.3c.4 1 1.4 1.7 2.5 1.7h13.9c2.1 0 3.7-1.7 3.7-3.7V9.3c.2-2.1-1.5-3.8-3.6-3.8zM20.4 27c-3.2 0-5.7-2.6-5.7-5.7s2.6-5.7 5.7-5.7 5.7 2.6 5.7 5.7-2.5 5.7-5.7 5.7zm22 0c-3.2 0-5.7-2.6-5.7-5.7s2.6-5.7 5.7-5.7 5.7 2.6 5.7 5.7-2.5 5.7-5.7 5.7z" />
                </svg>
                Khiva 360°
              </button>

              {/* Shop */}
              <button
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "var(--ink)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Xiva Muzey Do'koni
              </button>
            </div>

            {/* O'ng tomon: ijtimoiy + tel + til */}
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              {/* Ijtimoiy ikonlar */}
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                {/* YouTube */}
                <a
                  href="#"
                  style={{ color: "var(--ink-muted)", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink-muted)")}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="#"
                  style={{ color: "var(--ink-muted)", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink-muted)")}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                {/* Email */}
                <a
                  href="mailto:info@khivamuseum.uz"
                  style={{ color: "var(--ink-muted)", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink-muted)")}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </a>
              </div>

              {/* Tel */}
              <a
                href="tel:+998556046343"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "var(--ink)",
                  textDecoration: "none",
                }}
              >
                <RiPhoneLine size={16} />
                +998556046343
              </a>

              {/* Ajratuvchi */}
              <div
                style={{
                  width: 1,
                  height: 16,
                  backgroundColor: "var(--line)",
                }}
              />

              {/* Til tanlash */}
              <div style={{ position: "relative" }}>
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "var(--ink)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  🇺🇿 O'zbek
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    style={{
                      transition: "transform 0.2s",
                      transform: langOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <path d="M7 10l5 5 5-5H7z" />
                  </svg>
                </button>
                {langOpen && (
                  <div
                    style={{
                      ...dropdownStyle,
                      left: "auto",
                      right: 0,
                      minWidth: 150,
                    }}
                  >
                    {[
                      { flag: "🇺🇿", label: "O'zbek" },
                      { flag: "🇷🇺", label: "Русский" },
                      { flag: "🇬🇧", label: "English" },
                    ].map((lang) => (
                      <button
                        key={lang.label}
                        onClick={() => setLangOpen(false)}
                        style={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          padding: "10px 14px",
                          fontSize: "0.875rem",
                          color: "var(--on-brand)",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          textAlign: "left",
                        }}
                      >
                        <span>{lang.flag}</span>
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

      {/* ── Asosiy nav bar ── */}
      <div style={{ backgroundColor: "var(--brand)" }}>
        <div
          className="container"
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
        >
          {/* Nav havolalar */}
          <nav style={{ display: "flex", alignItems: "center" }}>
            {/* Bosh sahifa */}
            <NavLink
              to="/"
              end
              style={({ isActive }) => ({
                display: "block",
                padding: "22px 18px",
                fontSize: "0.8125rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: isActive ? "var(--accent)" : "var(--on-brand)",
                borderBottom: isActive ? "2px solid var(--accent)" : "2px solid transparent",
                transition: "color 0.2s, border-color 0.2s",
              })}
            >
              Bosh sahifa
            </NavLink>

            {/* Biz haqimizda dropdown */}
            <div style={{ position: "relative" }}>
              <button
                onClick={() => { setBizOpen(!bizOpen); setYangOpen(false); }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  padding: "22px 18px",
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--on-brand)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  transition: "color 0.2s",
                }}
              >
                Biz haqimizda
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{
                    transition: "transform 0.2s",
                    transform: bizOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  <path d="M7 10l5 5 5-5H7z" />
                </svg>
              </button>
              {bizOpen && (
                <div style={dropdownStyle}>
                  {[
                    { label: "Muzey tarixi", to: "/biz-haqimizda" },
                    { label: "Missiya va maqsad", to: "/biz-haqimizda#missiya" },
                    { label: "Jamoa", to: "/biz-haqimizda#jamoa" },
                    { label: "Hamkorlar", to: "/biz-haqimizda#hamkorlar" },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      onClick={() => setBizOpen(false)}
                      style={dropdownItemStyle}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "var(--brand-hover)";
                        e.currentTarget.style.opacity = "1";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.opacity = "0.8";
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Muzey kolleksiyasi */}
            <NavLink
              to="/kolleksiya"
              style={({ isActive }) => ({
                display: "block",
                padding: "22px 18px",
                fontSize: "0.8125rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: isActive ? "var(--accent)" : "var(--on-brand)",
                borderBottom: isActive ? "2px solid var(--accent)" : "2px solid transparent",
                transition: "color 0.2s, border-color 0.2s",
              })}
            >
              Muzey kolleksiyasi
            </NavLink>

            {/* Galereya */}
            <NavLink
              to="/galereya"
              style={({ isActive }) => ({
                display: "block",
                padding: "22px 18px",
                fontSize: "0.8125rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: isActive ? "var(--accent)" : "var(--on-brand)",
                borderBottom: isActive ? "2px solid var(--accent)" : "2px solid transparent",
                transition: "color 0.2s, border-color 0.2s",
              })}
            >
              Galereya
            </NavLink>

            {/* Yangiliklar dropdown */}
            <div style={{ position: "relative" }}>
              <button
                onClick={() => { setYangOpen(!yangOpen); setBizOpen(false); }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  padding: "22px 18px",
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--on-brand)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  transition: "color 0.2s",
                }}
              >
                Yangiliklar
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{
                    transition: "transform 0.2s",
                    transform: yangOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  <path d="M7 10l5 5 5-5H7z" />
                </svg>
              </button>
              {yangOpen && (
                <div style={dropdownStyle}>
                  {[
                    { label: "So'nggi yangiliklar", to: "/yangiliklar" },
                    { label: "E'lonlar", to: "/yangiliklar/elonlar" },
                    { label: "Tadbirlar", to: "/yangiliklar/tadbirlar" },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      onClick={() => setYangOpen(false)}
                      style={dropdownItemStyle}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "var(--brand-hover)";
                        e.currentTarget.style.opacity = "1";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.opacity = "0.8";
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Aloqa */}
            <NavLink
              to="/aloqa"
              style={({ isActive }) => ({
                display: "block",
                padding: "22px 18px",
                fontSize: "0.8125rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: isActive ? "var(--accent)" : "var(--on-brand)",
                borderBottom: isActive ? "2px solid var(--accent)" : "2px solid transparent",
                transition: "color 0.2s, border-color 0.2s",
              })}
            >
              Aloqa
            </NavLink>
          </nav>

          {/* Chipta + Profil tugmalari */}
          <div style={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Link
              to="/chipta"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 20px",
                backgroundColor: "var(--accent)",
                color: "var(--on-accent)",
                fontSize: "0.875rem",
                fontWeight: 600,
                borderRadius: "6px 0 0 6px",
                textDecoration: "none",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--accent-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--accent)")}
            >
              Chipta olish
              <IoTicketOutline size={18} />
            </Link>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 42,
                padding: "10px 0",
                backgroundColor: "var(--accent)",
                color: "var(--on-accent)",
                borderRadius: "0 6px 6px 0",
                border: "none",
                cursor: "pointer",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--accent-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--accent)")}
            >
              <RxPerson size={18} strokeWidth={0.25} />
            </button>
          </div>
        </div>
      </div>

      {/* Overlay – dropdown yopish uchun */}
      {(bizOpen || yangOpen || langOpen) && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 40,
          }}
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
