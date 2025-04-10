"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const projetos = [
  {
    src: "/projects/apae_pl.png",
    titulo: "APAE Pedro Leopoldo",
    href: "https://apaepl.vercel.app/",
  },
  {
    src: "/projects/rany_engenharia.png",
    titulo: "Site institucional",
    href: "https://rany-engenharia.vercel.app/",
  },
];

export default function CarrosselProjetos() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % projetos.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + projetos.length) % projetos.length);

  return (
    <div className="relative max-w-xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={projetos[index].src}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="rounded-xl overflow-hidden shadow"
        >
          <Image
            src={projetos[index].src}
            alt={projetos[index].titulo}
            width={800}
            height={600}
            className="w-full h-[400px] object-cover rounded-xl cursor-pointer"
            onClick={() => window.open(projetos[index].href, "_blank")}
          />
          <div className="bg-white py-2 text-center font-semibold text-lg">
            {projetos[index].titulo}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute top-1/2 left-0 -translate-y-1/2">
        <button
          onClick={prev}
          className="bg-white p-2 rounded-full shadow hover:bg-gray-100 cursor-pointer -ml-10"
        >
          <ChevronLeft />
        </button>
      </div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2">
        <button
          onClick={next}
          className="bg-white p-2 rounded-full shadow hover:bg-gray-100 cursor-pointer -mr-10"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
