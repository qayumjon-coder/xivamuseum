import { useRef, useState, useLayoutEffect } from "react";
import { NavLink, useLocation } from "react-router";
import { MdNewspaper, MdSpaceDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdCollectionsBookmark } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { LuPanelLeftClose, LuPanelLeftOpen } from "react-icons/lu";

const sections = [
  {
    title: "Asosiy",
    items: [
      {
        id: "dashboard",
        path: "/admin/dashboard",
        name: "Dashboard",
        icon: <MdSpaceDashboard size={20} />,
      },
      {
        id: "gallery",
        path: "/admin/gallery",
        name: "Gallery",
        icon: <i className="fa-solid fa-image text-xl" />,
      },
      {
        id: "conatct",
        path: "/admin/contact",
        name: "Contact",
        icon: <RiContactsFill size={20} />,
      },
      {
        id: "news",
        path: "/admin/News",
        name: "News",
        icon: <MdNewspaper size={22} />,
      },
      {
        id: "collection",
        path: "/admin/collection",
        name: "Collection",
        icon: <MdCollectionsBookmark size={23} />,
      },
      {
        id: "announcement",
        path: "/admin/announcement",
        name: "Announcement",
        icon: <i className="fa-solid fa-scroll text-[19px]"></i>,
      },
    ],
  },
  {
    title: "User",
    items: [
      {
        id: "users",
        path: "/admin/users",
        name: "Users",
        icon: <FaUsers size={23} />,
      },
      {
        id: "employees",
        path: "/admin/Employees",
        name: "Employees",
        icon: <i className="fa-solid fa-users-gear text-xl"></i>,
      },
      {
        id: "admins",
        path: "/admin/admins",
        name: "Admins",
        icon: <i className="fa-solid fa-user-shield text-xl"></i>,
      },
      {
        id: "settings",
        path: "/admin/settings",
        name: "Settings",
        icon: <IoMdSettings size={23} />,
      },
    ],
  },
];

const links = sections.flatMap((s) => s.items);

const Sidebar = ({ minimize, setMinimize }) => {
  const { pathname } = useLocation();
  const active =
    links.find((l) => pathname.startsWith(l.path))?.id ?? "dashboard";

  const [bg, setBg] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    radius: 6,
    color: "var(--accent)",
  });

  const [tip, setTip] = useState(null);

  const wrapRef = useRef(null);
  const btnRefs = useRef({});
  const iconRefs = useRef({});

  const measure = (el, radius, color) => {
    if (!el || !wrapRef.current) return;
    const p = wrapRef.current.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    setBg({
      left: r.left - p.left,
      top: r.top - p.top,
      width: r.width,
      height: r.height,
      radius,
      color,
    });
  };

  const showTip = (e, name) => {
    if (!minimize) return;
    const r = e.currentTarget.getBoundingClientRect();
    setTip({ name, top: r.top + r.height / 2, left: r.right + 8 });
  };

  const showButton = (id) =>
    measure(btnRefs.current[id], 12, "var(--side-hover)");
  const showIcon = (id) => measure(iconRefs.current[id], 6, "var(--accent)");

  useLayoutEffect(() => {
    showIcon(active);
    const onResize = () => showIcon(active);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [active]);

  const handleMinimize = () => {
    setMinimize(!minimize);
  };

  return (
    <div
      className={`${minimize ? "lg:w-4/40 xl:w-3/40 2xl:w-2/40" : ""} w-2/11 h-screen p-3 z-10 transition-all ease-in-out duration-500`}
    >
      <div
        className={`${minimize ? "justify-center" : ""} flex w-full justify-between items-center transition-all`}
      >
        <h2
          className={`${minimize ? "w-0 overflow-x-hidden" : "w-100"}  opacity-100 z-1 text-side-ink-muted font-medium transition-all text-2xl! md:text-lg 2xl:text-[28px]`}
        >
          Admin Dashboard
        </h2>
        <button
          onClick={handleMinimize}
          className="relative cursor-pointer p-2 rounded-xl hover:bg-side-hover text-side-ink-muted transition-all"
        >
          <LuPanelLeftClose
            size={35}
            className={`${minimize ? "opacity-0" : "opacity-100"} transition-all`}
          />
          <LuPanelLeftOpen
            size={35}
            className={`absolute top-2 left-2 ${minimize ? "opacity-100" : "opacity-0"} transition-all`}
          />
        </button>
      </div>
      <div
        className={`${minimize ? "rounded-2xl" : "rounded-2xl"} mt-2 flex items-center bg-side-card h-50 bg-[url(/istockphoto-1213935830-612x612.jpg)] bg-top gap-5`}
      >
        <div
          className={`${minimize ? "rounded-b-md" : "rounded-xl"} relative flex flex-col justify-between items-start overflow-hidden group hover:pt-3 hover:pl-3 hover:pr-3 pr-2 pt-2 pl-2 pb-2 w-full h-full transition-all`}
        >
          <div className="absolute z-0 top-0 left-0 w-full h-full bg-linear-to-t from-deep/80 to-deep/30 opacity-0 group-hover:opacity-100 transition-all"></div>
          <div
            className={`z-1 flex justify-between w-full items-start ${minimize ? "flex-col" : ""}`}
          ></div>
        </div>
      </div>

      <div className={`${!minimize ? "" : ""} flex flex-col gap-2`}>
        <div ref={wrapRef} className="relative flex flex-col">
          <div
            aria-hidden="true"
            style={{
              left: bg.left,
              top: bg.top,
              width: bg.width,
              height: bg.height,
              borderRadius: bg.radius,
              backgroundColor: bg.color,
            }}
            className="absolute z-0 transition-all duration-300 ease-out overflow-hidden"
          />

          <ul>
            {sections.map((section) => (
              <div key={section.title}>
                <h3 className="px-2 mb-2 mt-5 text-xs font-semibold uppercase tracking-wider text-side-ink-muted">
                  {section.title}
                </h3>

                <div className="flex flex-col">
                  {section.items.map((link) => (
                    <NavLink
                      key={link.id}
                      to={link.path}
                      ref={(el) => (btnRefs.current[link.id] = el)}
                      onMouseEnter={(e) => {
                        showButton(link.id);
                        showTip(e, link.name);
                      }}
                      onMouseLeave={() => {
                        showIcon(active);
                        setTip(null);
                      }}
                      className={`${minimize ? "w-min" : ""} relative z-10 flex group w-full gap-3 items-center p-1 text-side-ink`}
                    >
                      <span
                        ref={(el) => (iconRefs.current[link.id] = el)}
                        className={`p-3 rounded-md ${active === link.id ? "text-on-brand" : ""}`}
                      >
                        {link.icon}
                      </span>
                      {!minimize && <span>{link.name}</span>}
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
      {tip && (
        <div
          style={{ top: tip.top, left: tip.left }}
          className="fixed z-50 -translate-y-1/2 rounded-md bg-side-hover p-1 px-2 text-side-ink shadow-lg shadow-black/20 pointer-events-none"
        >
          {tip.name}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
