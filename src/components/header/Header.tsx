"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { MdMenu, MdOutlineOpenInNew } from "react-icons/md";

export default function Header() {
  const [title, setTitle] = useState<string>("CodarSe");
  const [drawer, setDrawer] = useState<boolean>(false);

  const currentPath = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => {
      setTitle(document.title);
      setDrawer(false);
    }, 0);

    return () => {
      clearTimeout(timer);
    };
  }, [currentPath]);

  return (
    <nav className="flex items-center gap-6 bg-primary justify-start md:justify-center py-2 sm:py-4 px-6">
      <button className="sm:hidden" onClick={() => setDrawer(true)}>
        <MdMenu size={24} />
      </button>
      <ul
        className="flex gap-4 items-center "
        tabIndex={drawer ? -1 : undefined}
      >
        <li className="my-2">
          <Link href="/" className="border-2 rounded-md py-2 px-2 font-bold ">
            CODARSE
          </Link>
        </li>
        <li className="hidden sm:block">
          <Link
            href="/"
            data-active={currentPath === "/"}
            className={"data-[active=true]:underline"}
          >
            Home
          </Link>
        </li>
        <li className="hidden sm:block">
          <Link
            href="/cursos"
            data-active={currentPath === "/cursos"}
            className={"data-[active=true]:underline"}
          >
            Cursos
          </Link>
        </li>

        <li className="hidden sm:block">
          <Link
            href="https://google.com"
            target="_blank"
            className="flex  gap-1 items-center"
          >
            Blog
            <MdOutlineOpenInNew />
          </Link>
        </li>
      </ul>

      {/* Drawer menu para mobile */}
      <div
        tabIndex={drawer ? 0 : -1}
        data-open={drawer}
        onClick={() => setDrawer(false)}
        className="bg-linear-to-r from-background fixed top-0 left-0 
        bottom-0 right-0 transition-transform data-[open=false]:-translate-x-full"
      >
        <ul
          className="flex gap-4 flex-col p-4 w-60 h-full bg-background"
          onClick={(e) => e.stopPropagation()}
        >
          <li className="">
            <Link
              href="/"
              data-active={currentPath === "/"}
              className={"data-[active=true]:underline"}
            >
              Home
            </Link>
          </li>
          <li className="">
            <Link
              href="/cursos"
              data-active={currentPath === "/cursos"}
              className={"data-[active=true]:underline"}
            >
              Cursos
            </Link>
          </li>

          <li className="">
            <Link
              href="https://google.com"
              target="_blank"
              className="flex gap-1 items-center"
            >
              Blog
              <MdOutlineOpenInNew />
            </Link>
          </li>
        </ul>
      </div>

      <h3 className="sm:hidden">{title}</h3>
    </nav>
  );
}
