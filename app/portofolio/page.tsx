'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const teamMembers = [
  {
    id: 1,
    name: 'Syauqi',
    avatar: '👨‍💻',
    role: 'Frontend Developer',
    projects: 12
  },
  {
    id: 2,
    name: 'Aldiansyah',
    avatar: '👩‍🎨',
    role: 'UI/UX Designer',
    projects: 8
  }
]

export default function PortfolioPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-8"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-gray-800 mb-2 text-center"
      >
        Portfolio
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-gray-600 text-center mb-12"
      >
        Pilih kelompok kami untuk melihat portofolio
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            whileHover={{ scale: 1.02 }}
          >
            <Link href={`/portofolio/${member.name.toLowerCase().replace(' ', '-')}`}>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100 card-hover text-center">
                <div className="text-7xl mb-4">{member.avatar}</div>
                <h3 className="text-2xl font-bold text-gray-800">{member.name}</h3>
                <p className="text-orange-500 text-sm">{member.role}</p>
                <p className="text-gray-500 text-sm mt-2">{member.projects} Projects</p>
                <div className="mt-4 inline-block btn-orange px-6 py-2 rounded-lg text-sm font-medium hover-lift">
                  Lihat Portfolio
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}