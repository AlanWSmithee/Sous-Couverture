import { AppDataModel } from './app-data.model'
import './data-table.css'
import { AiOutlineCaretRight, AiTwotoneLock, AiTwotoneUnlock } from "react-icons/ai";

type TypesDataTable = {
  onCardClick: (data: AppDataModel) => void
  items: AppDataModel[]
}

export function AppDataTable({ items, onCardClick }: TypesDataTable) {
  const handleCardClick = (item: AppDataModel) => {
    onCardClick(item)
  }

  return (
    <div className="">
      {items.map((item) => (
        <div key={item.id} className="bg-gray-50 text-md font-semibold rounded-md shadow-lg flex justify-between items-center mx-auto w-4/5 my-6">
          <h3 className="w-48">{item.gameName}</h3>
          <div className="w-2/6 truncate">{item.players}</div>
          <p className="w-20">
            {item.lengthPlayers}/{item.maxPlayers}
          </p>
          <p>{(item.private && <AiTwotoneLock  className="w-8 h-8"/>) || <AiTwotoneUnlock  className="w-8 h-8"/>}</p>

          <AiOutlineCaretRight className="w-12 h-12 cursor-pointer" onClick={() => handleCardClick(item)}>
            <button></button>
          </AiOutlineCaretRight>
        </div>
      ))}
    </div>
  )
}
