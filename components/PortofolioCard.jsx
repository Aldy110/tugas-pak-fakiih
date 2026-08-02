'use client'

import LikeButton from './Likebutton'
import { motion } from 'framer-motion'

const PortfolioCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl p-6 shadow-md border border-orange-100 card-hover"
    >
      <div className="text-6xl mb-4">{project.image}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
      <p className="text-gray-600 text-sm mb-4">{project.description}</p>
      <div className='mt-4 flex justify-end'>
        <LikeButton cardId={project.id}/>
      </div>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-xs font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default PortfolioCard