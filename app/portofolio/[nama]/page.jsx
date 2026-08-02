'use client'

import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import PortfolioCard from '@/components/PortofolioCard'

// Data portfolio untuk masing-masing orang
const portfolioData = {
  'john-doe': {
    name: 'Syauqi',
    avatar: '👨‍💻',
    role: 'Frontend Developer',
    bio: 'Full-stack developer with 5+ years of experience in building web applications.',
    projects: [
      {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'A full-featured e-commerce platform with payment integration',
        tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        image: '🛍️'
      },
      {
        id: 2,
        title: 'Task Management App',
        description: 'Collaborative task management with real-time updates',
        tech: ['Next.js', 'Firebase', 'Tailwind CSS'],
        image: '📋'
      },
      {
        id: 3,
        title: 'Portfolio Website',
        description: 'Personal portfolio built with modern web technologies',
        tech: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
        image: '🌐'
      }
    ]
  },
  'jane-smith': {
    name: 'Aldiansyah',
    avatar: '👩‍🎨',
    role: 'UI/UX Designer',
    bio: 'Creative designer specializing in user-centered design and design systems.',
    projects: [
      {
        id: 1,
        title: 'Mobile App Design',
        description: 'Complete UI/UX design for a health tracking app',
        tech: ['Figma', 'Adobe XD', 'Design System'],
        image: '📱'
      },
      {
        id: 2,
        title: 'Design System',
        description: 'Comprehensive design system for enterprise applications',
        tech: ['Figma', 'Storybook', 'React'],
        image: '🎨'
      },
      {
        id: 3,
        title: 'Landing Page Design',
        description: 'High-converting landing page design for a SaaS product',
        tech: ['Figma', 'Prototyping', 'User Testing'],
        image: '✨'
      }
    ]
  }
}

export default function IndividualPortfolio() {
  const params = useParams()
  const name = params.nama
  const portfolio = portfolioData[name]

  if (!portfolio) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-800">Portfolio not found</h2>
        <Link href="/portofolio" className="text-orange-500 hover:underline mt-4 inline-block">
          ← Kembali
        </Link>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-8"
    >
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          href="/portofolio"
          className="inline-flex items-center text-orange-500 hover:text-orange-600 transition-colors mb-6"
        >
          ← Kembali
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100 mb-8"
      >
        <div className="flex items-center gap-6">
          <div className="text-7xl">{portfolio.avatar}</div>
          <div>
            <h1 className="text-4xl font-bold text-gray-800">{portfolio.name}</h1>
            <p className="text-orange-500 text-lg font-medium">{portfolio.role}</p>
            <p className="text-gray-600 mt-2">{portfolio.bio}</p>
          </div>
        </div>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-2xl font-bold text-gray-800 mb-6"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolio.projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
          >
            <PortfolioCard project={project} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}