'use client'

import { useState, useEffect } from 'react'
import { Heart } from 'lucide-react'

export default function LikeButton({
  cardId,
}: {
  cardId: string
}) {
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(0)

  useEffect(() => {
    const savedLiked = localStorage.getItem(`liked-${cardId}`)
    const savedCount = localStorage.getItem(`likes-${cardId}`)

    setLiked(savedLiked === 'true')
    setLikes(savedCount ? parseInt(savedCount) : 0)
  }, [cardId])

  const handleLike = () => {
    if (liked) {
      const newCount = likes - 1

      setLikes(newCount)
      setLiked(false)

      localStorage.setItem(`liked-${cardId}`, 'false')
      localStorage.setItem(`likes-${cardId}`, newCount.toString())
    } else {
      const newCount = likes + 1

      setLikes(newCount)
      setLiked(true)

      localStorage.setItem(`liked-${cardId}`, 'true')
      localStorage.setItem(`likes-${cardId}`, newCount.toString())
    }
  }

  return (
    <button
      onClick={handleLike}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
        liked
          ? 'bg-orange-100 text-orange-600'
          : 'bg-gray-100 text-gray-600 hover:bg-orange-100 hover:text-orange-600'
      }`}
    >
      <Heart
        size={16}
        fill={liked ? '#f97316' : 'none'}
        className="transition-all duration-300"
      />

      {likes}
    </button>
  )
}