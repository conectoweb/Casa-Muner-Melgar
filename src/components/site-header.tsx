"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/data/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  // Al cambiar de ruta, forzar scroll inmediato al inicio de la página
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname]);

  useEffect(() => {
    if (openSubmenu === null) return;
    function onPointerDown(event: PointerEvent) {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setOpenSubmenu(null);
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [openSubmenu]);

  function closeAll() {
    setMenuOpen(false);
    setOpenSubmenu(null);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }

  return (
    <header className="site-header" ref={headerRef}>
      <Link
        className="brand"
        href="/"
        scroll={true}
        aria-label="Casa Muner Melgar, ir al inicio"
        onClick={closeAll}
      >
        <span className="brand-logo-wrap">
          <Image
            className="brand-logo"
            src="/images/marca/logo-casa-muner-melgar-blanco.svg"
            width={36}
            height={36}
            alt="Logo Casa Muner Melgar"
            aria-hidden="true"
          />
        </span>
        <span className="brand-name">Casa Muner Melgar</span>
      </Link>

      <button
        ref={menuToggleRef}
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span>{menuOpen ? "Cerrar" : "Menú"}</span>
        <span className="menu-icon" aria-hidden="true">
          {menuOpen ? "×" : "☰"}
        </span>
      </button>

      <nav
        className={`primary-navigation${menuOpen ? " is-open" : ""}`}
        id="primary-navigation"
        aria-label="Navegación principal"
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            if (openSubmenu !== null) {
              setOpenSubmenu(null);
            } else {
              setMenuOpen(false);
              menuToggleRef.current?.focus();
            }
          }
        }}
      >
        {navigation.map((item) =>
          item.children ? (
            <div className="nav-group" key={item.label}>
              <button
                type="button"
                className="nav-group-toggle"
                aria-expanded={openSubmenu === item.label}
                aria-controls={`submenu-${item.label}`}
                onClick={() =>
                  setOpenSubmenu((current) =>
                    current === item.label ? null : item.label,
                  )
                }
              >
                {item.label}
                <span className="nav-caret" aria-hidden="true">
                  ▾
                </span>
              </button>
              <ul
                id={`submenu-${item.label}`}
                className={`nav-submenu${
                  openSubmenu === item.label ? " is-open" : ""
                }`}
              >
                {item.children.map((child) => (
                  <li key={child.href}>
                    <Link href={child.href} scroll={true} onClick={closeAll}>
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <Link key={item.href} href={item.href ?? "/"} scroll={true} onClick={closeAll}>
              {item.label}
            </Link>
          ),
        )}
        <Link
          className="nav-cta"
          href="/contacto"
          scroll={true}
          onClick={closeAll}
        >
          Contactar y Reservar
        </Link>
      </nav>
    </header>
  );
}
