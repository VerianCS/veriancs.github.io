'use client'

import React, { useState, useEffect, useRef } from 'react'

export default function BackgroundAudio() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.error('Audio playback failed:', error)
          setIsPlaying(false)
        })
      } else {
        audioRef.current.pause()
      }
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
    }
  }, [isPlaying])

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={togglePlayPause}
        className="
          bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg
          text-white text-opacity-80 font-semibold
          py-2 px-4 rounded-full
          border border-white border-opacity-20
          shadow-lg
          hover:bg-opacity-20 hover:text-opacity-100
          focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50
          transition-all duration-300 ease-in-out
        "
        aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
      >
        {isPlaying ? '❚❚' : '▶'}
      </button>
      <audio
        ref={audioRef}
        src="/abyssrift.mp3"
        loop
        preload="auto"
      >
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}