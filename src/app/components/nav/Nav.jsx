"use client";
import { BsLightningCharge } from "react-icons/bs";
import { motion } from "framer-motion";

export default function Nav() {
  const links = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "About",
      link: "/",
    },
    {
      id: 3,
      title: "Our Fleet",
      link: "/",
    },
    {
      id: 1,
      title: "Contact",
      link: "/",
    },
  ];
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-4 flex justify-between items-center h-16 fixed w-full overflow-hidden"
    >
      <div className="flex items-center">
        <BsLightningCharge size={40} />
        <h2 className="text-2xl">ElecHire</h2>
      </div>
      <div>
        <ul className="flex">
          {links.map(({ id, title, link }) => (
            <li key={id} className="mx-4">
              <a href={link}>{title}</a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
