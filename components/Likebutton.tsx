'use client'

import { useState } from 'react'
import { Heart } from 'lucide-react'

export default function LikeButton() {
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
    <div className="flex items-center gap-3">
      <button
        onClick={handleLike}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-200 transition"
      >
        <Heart
          size={18}
          fill={liked ? 'currentColor' : 'none'}
        />

        {liked ? 'Batal Suka' : 'Suka'}
      </button>

      <span className="text-gray-600">
        {likes}
      </span>
    </div>
  )
}