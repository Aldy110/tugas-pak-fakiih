'use client'

import { motion } from 'framer-motion'
import ProfileCard from '@/components/ProfileCard'

const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Frontend Developer',
    bio: 'Passionate about creating beautiful and responsive web applications with modern technologies.',
    avatar: '👨‍💻',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    social: {
      github: 'https://github.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe',
    }
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'UI/UX Designer',
    bio: 'Creative designer with a passion for user-centered design and intuitive interfaces.',
    avatar: '👩‍🎨',
    skills: ['Figma', 'Adobe XD', 'UI Design', 'Prototyping'],
    social: {
      github: 'https://github.com/janesmith',
      linkedin: 'https://linkedin.com/in/janesmith',
      twitter: 'https://twitter.com/janesmith',
    }
  }
]

export default function ProfilePage() {
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
        Meet Our Team
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-gray-600 text-center mb-12"
      >
        Get to know the creative minds behind our work
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <ProfileCard member={member} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}