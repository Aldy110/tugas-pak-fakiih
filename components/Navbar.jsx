'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const Navbar = () => {
  const pathname = usePathname()

  const navItems = [
    { name: 'Profile', path: '/profil' },
    { name: 'Portfolio', path: '/portofolio' },
    { name: 'Kontak', path: '/kontak'}
  ]

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm border-b border-orange-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="font-bold text-lg text-gray-800">Portfolio</span>
          </motion.div>

          <div className="flex space-x-2">
            {navItems.map((item, index) => {
              const isActive = pathname === item.path || pathname?.startsWith(item.path + '/')
              
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.path}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative ${
                      isActive
                        ? 'text-orange-600'
                        : 'text-gray-600 hover:text-orange-500'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar