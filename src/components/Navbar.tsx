/*
Author: chankruze (chankruze@gmail.com)
Created: Wed Oct 05 2022 12:46:22 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { Link } from "react-router-dom";

const links = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/super-heroes",
    title: "Traditional Super Heroes",
  },
  {
    href: "/rq-super-heroes",
    title: "RQ Super Heroes",
  },
];

export const Navbar = () => {
  return (
    <nav className="p-4 flex items-center gap-4 shadow">
      {links.map((l) => (
        <Link
          key={l.href}
          to={l.href}
          className="font-medium hover:text-blue-500"
        >
          {l.title}
        </Link>
      ))}
    </nav>
  );
};
