'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const ProfileCard = ({ member }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100 card-hover"
    >
      <div className="flex items-start gap-4">
        <div className="text-6xl bg-orange-50 rounded-2xl p-4 w-24 h-24 flex items-center justify-center">
          {member.avatar}
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-800">{member.name}</h3>
          <p className="text-orange-500 font-medium text-sm">{member.role}</p>
          <p className="text-gray-600 text-sm mt-2">{member.bio}</p>
        </div>
      </div>

      <div className="mt-4">
        <h4 className="text-sm font-semibold text-gray-700 mb-2">Skills</h4>
        <div className="flex flex-wrap gap-2">
          {member.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-xs font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 flex gap-3">
        {member.social.github && (
          <a
            href={member.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-orange-500 transition-colors"
          >
            GitHub
          </a>
        )}
        {member.social.linkedin && (
          <a
            href={member.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-orange-500 transition-colors"
          >
            LinkedIn
          </a>
        )}
        {member.social.twitter && (
          <a
            href={member.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-orange-500 transition-colors"
          >
            Twitter
          </a>
        )}
      </div>

      <Link
        href={`/portofolio/${member.name.toLowerCase().replace(' ', '-')}`}
        className="mt-4 w-full btn-orange px-4 py-2 rounded-lg text-sm font-medium inline-block text-center hover-lift"
      >
        View Portfolio
      </Link>
    </motion.div>
  )
}

export default ProfileCard