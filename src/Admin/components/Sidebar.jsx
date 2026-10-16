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
    title: "User config",
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
        path: "/admin/guards",
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
    radius: 600,
  });

  const wrapRef = useRef(null);
  const btnRefs = useRef({});
  const iconRefs = useRef({});

  const measure = (el, radius) => {
    if (!el || !wrapRef.current) return;
    const p = wrapRef.current.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    setBg({
      left: r.left - p.left,
      top: r.top - p.top,
      width: r.width,
      height: r.height,
      radius: radius,
    });
  };

  const showButton = (id) => measure(btnRefs.current[id], 12);
  const showIcon = (id) => measure(iconRefs.current[id], 6);

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
      className={`${minimize ? "w-2/40" : ""} 2/10 h-full p-[0.1px] z-10 transition-all ease duration-500`}
    >
      <div
        className={`${minimize ? "mx-1 mt-5 rounded-md" : "mx-5 mt-5 rounded-2xl"} flex items-center bg-side-card h-50 bg-[url(/istockphoto-1213935830-612x612.jpg)] bg-top gap-5`}
      >
        <div
          className={`${minimize ? "rounded-b-md" : "rounded-xl"} relative flex flex-col justify-between items-start overflow-hidden group hover:pt-3 hover:pl-3 hover:pr-3 pr-2 pt-2 pl-2 pb-2 w-full h-full transition-all`}
        >
          <div className="absolute z-0 top-0 left-0 w-full h-full bg-linear-to-t from-deep/80 to-deep/30 opacity-0 group-hover:opacity-100 transition-all"></div>
          <div
            className={`z-1 flex justify-between w-full items-start ${minimize ? "flex-col" : ""}`}
          >
            <a
              className={`${minimize ? "" : ""} rounded-xl bg-white shadow-[0_0_5px_rgba(0,0,0,0.4)] w-20 p-1 mb-2 block`}
            >
              <img className="w-full" src="/logo.png" alt="Logo" />
            </a>

            <div>
              <button
                onClick={handleMinimize}
                className="relative cursor-pointer p-0.75 rounded-xl bg-bg text-ink"
              >
                <LuPanelLeftClose
                  size={25}
                  className={`${minimize ? "opacity-0" : "opacity-100"} transition-all`}
                />
                <LuPanelLeftOpen
                  size={25}
                  className={`absolute top-0.75 left-0.75 ${minimize ? "opacity-100" : "opacity-0"} transition-all`}
                />
              </button>
            </div>
          </div>
          <h2 className="opacity-0 z-1 -mb-5 group-hover:opacity-100 group-hover:mb-0 text-side-ink font-medium transition-all text-base md:text-lg 2xl:text-[28px]">
            Admin Dashboard
          </h2>
        </div>
      </div>

      <div className="flex flex-col justify-between h-full gap-2.5 mt-5 mx-5">
        <div
          ref={wrapRef}
          className="relative flex flex-col justify-between h-full"
        >
          <div
            aria-hidden="true"
            style={{
              left: bg.left,
              top: bg.top,
              width: bg.width,
              height: bg.height,
              borderRadius: bg.radius,
            }}
            className="absolute z-0 bg-side-hover transition-all duration-300 ease-out overflow-hidden"
          />

          <ul>
            {sections.map((section) => (
              <div key={section.title}>
                <h3 className="px-2 mb-2 mt-5 text-xs font-semibold uppercase tracking-wider text-side-ink-muted">
                  {section.title}
                </h3>

                <div className="flex flex-col gap-0.5">
                  {section.items.map((link) => (
                    <NavLink
                      key={link.id}
                      to={link.path}
                      ref={(el) => (btnRefs.current[link.id] = el)}
                      onMouseEnter={() => showButton(link.id)}
                      onMouseLeave={() => showIcon(active)}
                      className="relative z-10 flex w-full items-center gap-3 p-1 text-side-ink"
                    >
                      <span
                        ref={(el) => (iconRefs.current[link.id] = el)}
                        className="p-3 rounded-md"
                      >
                        {link.icon}
                      </span>
                      <span>{link.name}</span>
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
