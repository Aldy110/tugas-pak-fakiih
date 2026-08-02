"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-[80vh] flex flex-col items-center justify-center text-center"
    >
      <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
        Welcome to Our
        <span className="text-orange-500 block mt-2">Portfolio Showcase</span>
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl">
        Discover the creative works of our talented team members
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <Link
          href="/profil"
          className="btn-orange px-8 py-3 rounded-lg font-medium hover-lift"
        >
          View Profiles
        </Link>
        <Link
          href="/portofolio"
          className="px-8 py-3 rounded-lg font-medium border-2 border-orange-500 text-orange-500 hover:bg-orange-50 transition-all duration-300 hover-lift"
        >
          See Portfolio
        </Link>
        <Link href='/kontak'
              className='px-8 py-3 rounded-lg font-medium border-2 border-orange-500 text-orange-500 hover:bg-orange-50 transition-all duration-300 hover-lift'>
                Hubungi Kami
              </Link>
      </div>
    </motion.div>
  );
}
