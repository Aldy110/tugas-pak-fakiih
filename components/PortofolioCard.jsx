'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const PortfolioCard = ({ project }) => {
  const [likes, setLikes] = useState(0)
  const [liked, setLiked] = useState(false)

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1)
      setLiked(false)
    } else {
      setLikes(likes + 1)
      setLiked(true)
    }
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl p-6 shadow-md border border-orange-100"
    >
      <h3 className="text-xl font-bold text-gray-800 mb-2">
        {project.title}
      </h3>

      <p className="text-gray-600 text-sm mb-4">
        {project.description}
      </p>

      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-orange-500 font-medium text-sm hover:text-orange-700 transition-colors"
      >
        View Source Code ↗
      </a>

      <div className="mt-4">
        <button
          onClick={handleLike}
          className="px-4 py-2 rounded-full bg-orange-100 text-orange-600"
        >
          {liked ? 'Batal Suka' : 'Suka'} ❤️ {likes}
        </button>
      </div>

      {likes >= 5 && (
        <span className="block mt-3 text-sm text-orange-500 font-semibold">
          🔥 Proyek Terpopuler
        </span>
      )}
    </motion.div>
  )
}

export default PortfolioCard