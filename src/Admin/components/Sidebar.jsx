import { useRef, useState, useLayoutEffect } from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const links = [
  { id: "dashboard", name: "Dashboard", icon: <MdSpaceDashboard size={20} /> },
  { id: "users", name: "Users", icon: <FaUsers size={20} /> },
  { id: "settings", name: "Settings", icon: <IoMdSettings size={20} /> },
];

const Sidebar = () => {
  const [active, setActive] = useState("dashboard");
  const [bg, setBg] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    radius: 6,
  });

  const wrapRef = useRef(null);
  const btnRefs = useRef({});
  const iconRefs = useRef({});

  // Elementni wrapper'ga nisbatan o'lchaydi
  const measure = (el, radius) => {
    if (!el || !wrapRef.current) return;
    const p = wrapRef.current.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    setBg({
      left: r.left - p.left,
      top: r.top - p.top,
      width: r.width,
      height: r.height,
      radius,
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

  return (
    <div className="w-2/10 h-screen p-[0.1px]">
      <div className="flex items-center bg-bg mx-5 rounded-xl gap-10 mt-10 py-2.5">
        <button>
          <img className="w-20" src="/logo.png" alt="Logo" />
        </button>
        <h2 className="text-text-wt text-[22px]">Sidebar</h2>
      </div>

      <div className="flex flex-col gap-2.5 mt-10 mx-5">
        {/* relative wrapper: fon shu ichida joylashadi */}
        <div ref={wrapRef} className="relative">
          <div
            aria-hidden="true"
            style={{
              left: bg.left,
              top: bg.top,
              width: bg.width,
              height: bg.height,
              borderRadius: bg.radius,
            }}
            className="absolute z-0 bg-bg transition-all duration-300 ease-out"
          />

          <ul>
            {links.map((link) => (
              <li key={link.id} className="w-full mb-0.5">
                <button
                  ref={(el) => (btnRefs.current[link.id] = el)}
                  onClick={() => setActive(link.id)}
                  onMouseEnter={() => showButton(link.id)}
                  onMouseLeave={() => showIcon(active)}
                  className="relative z-10 flex w-full items-center gap-5 p-2 cursor-pointer"
                >
                  <span
                    ref={(el) => (iconRefs.current[link.id] = el)}
                    className="p-3 rounded-md"
                  >
                    {link.icon}
                  </span>
                  <span>{link.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
