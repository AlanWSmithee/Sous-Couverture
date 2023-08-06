import { AppDataModel } from './app-data.model'
import { AppCarousel } from '../carousel/app-carousel'
import { AiOutlineCaretRight } from 'react-icons/ai'
import { FaLockOpen, FaLock } from 'react-icons/fa'

type TypesDataTable = {
  onCardClick: (data: AppDataModel) => void
  items: AppDataModel[]
}

export function AppDataTable({ items, onCardClick }: TypesDataTable) {
  const handleCardClick = (item: AppDataModel) => {
    onCardClick(item)
  }

  return (
    <div className="w-full">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-gray-50 text-md font-semibold rounded-md shadow-lg flex justify-between items-center mx-auto h-20 w-full my-6">
          <h3 className="w-48">{item.gameName}</h3>
          <div className="w-2/6 truncate"><AppCarousel players={item.players}/></div>
          <p className="w-20">
            {item.lengthPlayers}/{item.maxPlayers}
          </p>
          <p>
            {(item.private && <FaLock className="w-8 h-8" />) || (
              <FaLockOpen className="w-8 h-8" />
            )}
          </p>

          <AiOutlineCaretRight
            className="w-12 h-12 cursor-pointer"
            onClick={() => handleCardClick(item)}>
            <button></button>
          </AiOutlineCaretRight>
        </div>
      ))}
    </div>
  )
}
