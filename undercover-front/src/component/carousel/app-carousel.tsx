import { FaUserSecret } from 'react-icons/fa'
import { AiOutlineCaretRight, AiOutlineCaretLeft } from 'react-icons/ai'
import { useState } from 'react'
import './app-carousel.css'

interface CarouselPlayers {
  players: string[]
}

export function AppCarousel({ players }: CarouselPlayers) {
  const [startIndex, setStartIndex] = useState(0)
  const [endIndex, setEndIndex] = useState(3)
  const [isTransition, setTransition] = useState(false)
  const [direction, setDirection] = useState('')

  function previousItem() {
    handleTransitionEnd()
    if (endIndex > 3) {
      setDirection('slide-left')
      setTransition(true)
      setStartIndex(startIndex - 1)
      setEndIndex(endIndex - 1)
    }
  }

  function nextItem() {
    handleTransitionEnd()
    if (startIndex < players.length - 3) {
      setDirection('slide-right')
      setTransition(true)
      setStartIndex(startIndex + 1)
      setEndIndex(endIndex + 1)
    }
  }

  function handleTransitionEnd() {
    setTransition(false)
    setDirection('')
  }

  return (
    <div>
      <div className="relative">
        <div className="absolute left-0 translate-y-2/4">
          <button
            onClick={previousItem}
            className={
              startIndex === 0
                ? 'cursor-not-allowed text-stone-300'
                : 'cursor-pointer'
            }>
            <AiOutlineCaretLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="absolute right-0 translate-y-2/4">
          <button
            onClick={nextItem}
            className={
              endIndex === players.length
                ? 'cursor-not-allowed text-stone-300'
                : 'cursor-pointer'
            }>
            <AiOutlineCaretRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      {players.map(
        (player, index) =>
          index >= startIndex &&
          index < endIndex && (
            <div
              key={player}
              onAnimationEnd={handleTransitionEnd}
              className={
                (isTransition ? direction : '') +
                ' inline-flex item-center justify-center'
              }>
              <div className="w-16 truncate mx-2">
                <FaUserSecret className="w-8 h-8 mx-auto" />
                <span className="text-xs text-center">{player}</span>
              </div>
            </div>
          )
      )}
    </div>
  )
}
