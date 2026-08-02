'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const portfolioData = {
  'john-doe': {
    name: 'Syauqi',
    avatar: '👨‍💻',
    role: 'Frontend Developer',
  },
  'jane-smith': {
    name: 'Aldiansyah',
    avatar: '👩‍🎨',
    role: 'UI/UX Designer',
  }
}

export default function PortofolioPage() {
  return (
    <main className="container mx-auto px-4 max-w-6xl py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Portfolio</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(portfolioData).map(([slug, person], index) => (
          <motion.div
            key={slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Link
              href={`/portofolio/${slug}`}
              className="card-hover bg-white/80 border border-orange-100 rounded-xl p-6 block text-center"
            >
              <div className="text-5xl mb-3">{person.avatar}</div>
              <h3 className="font-semibold text-gray-800 text-lg">{person.name}</h3>
              <p className="text-orange-500 text-sm">{person.role}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  )
}