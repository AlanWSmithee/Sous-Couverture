import { FaUserSecret } from 'react-icons/fa'
import { AiOutlineCaretRight, AiOutlineCaretLeft } from 'react-icons/ai'
import { useState } from 'react'

interface CarouselPlayers {
  players: string[]
}

export function AppCarousel({ players }: CarouselPlayers) {
  const [startIndex, setStartIndex] = useState(0)
  const [endIndex, setEndIndex] = useState(3)

  function previousItem() {
    if (endIndex > 3) {
      setStartIndex(startIndex - 1)
      setEndIndex(endIndex - 1)
    }
  }

  function nextItem() {
    if (startIndex < players.length - 3) {
      setStartIndex(startIndex + 1)
      setEndIndex(endIndex + 1)
    }
  }
  return (
    <div>
      <div className="relative">
        <div className="absolute left-0 translate-y-2/4">
          <button onClick={previousItem} className="cursor-pointer">
            <AiOutlineCaretLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="absolute right-0 translate-y-2/4">
          <button onClick={nextItem} className="cursor-pointer">
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
              className="inline-flex item-center justify-center slide-right">
              <div className="w-16 truncate mx-2" title={player}>
                <FaUserSecret className="w-8 h-8 mx-auto" />
                <span className="text-xs text-center">{player}</span>
              </div>
              <button></button>
            </div>
          )
      )}
    </div>
  )
}
