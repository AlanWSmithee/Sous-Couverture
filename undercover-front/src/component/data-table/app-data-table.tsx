import { AppDataModel } from './app-data.model'
import './data-table.css'

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
        <div key={item.id} className="gameCards">
          <div className="leftCards">
            <h3 className="titleCards">{item.gameName}</h3>
            <div className="playersLists">{item.players}</div>
          </div>
          <div className="middleCards">
            <p>{item.state}</p>
            <p>
              {item.lengthPlayers}/{item.maxPlayers}
            </p>
            <p>{(item.private && 'private') || 'public'}</p>
          </div>
          <div className="rightCards" onClick={() => handleCardClick(item)}>
            <button>Join</button>
          </div>
        </div>
      ))}
    </div>
  )
}
