import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinkBase =
    "px-3 py-2 text-sm font-semibold transition rounded-full";
  const navLinkInactive =
    "text-slate-600 hover:text-emerald-600 hover:bg-emerald-50";
  const navLinkActive =
    "text-white bg-emerald-500 hover:bg-emerald-600 shadow-sm";

  return (
    <nav className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo / Brand */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-md">
            <span className="text-lg font-bold">M</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-bold tracking-tight text-slate-900">
              MetaNutriBio AI
            </span>
            <span className="text-[11px] text-slate-500">
              Guided learning for biochemistry & diet
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-2 md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${navLinkBase} ${
                isActive ? navLinkActive : navLinkInactive
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/biochemistry"
            className={({ isActive }) =>
              `${navLinkBase} ${
                isActive ? navLinkActive : navLinkInactive
              }`
            }
          >
            Biochemistry
          </NavLink>

          <NavLink
            to="/diet-and-nutrients"
            className={({ isActive }) =>
              `${navLinkBase} ${
                isActive ? navLinkActive : navLinkInactive
              }`
            }
          >
            Nutrient & Diet
          </NavLink>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full p-2 text-slate-700 hover:bg-slate-100 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Open main menu</span>
          {open ? (
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-3 space-y-2 sm:px-6 lg:px-8">
            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${navLinkBase} ${
                  isActive ? navLinkActive : navLinkInactive
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/biochemistry"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${navLinkBase} ${
                  isActive ? navLinkActive : navLinkInactive
                }`
              }
            >
              Biochemistry
            </NavLink>

            <NavLink
              to="/diet-and-nutrients"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${navLinkBase} ${
                  isActive ? navLinkActive : navLinkInactive
                }`
              }
            >
              Nutrient & Diet
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
