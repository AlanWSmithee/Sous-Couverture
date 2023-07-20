import { getListGameParty } from '@/domain/data-table/data-table.service'
import './data-table.css'
import { Dispatch, ReactNode, SetStateAction} from 'react'
import { PartyPlayer } from '@/domain/data-table/data-table.model'

type TypesDataTable = {
  onCardClick: (data: PartyPlayer) => void
}

export function AppDataTable({ onCardClick } : TypesDataTable) {
const dataTest = getListGameParty()

  const handleCardClick = (data: PartyPlayer) => {
    
    if (onCardClick) {
      onCardClick(data);
    }
  }

  return (
    <div className="">
      {dataTest.map((data) => (
        <div key={data.id} className="gameCards">
          <div className="leftCards">
            <h3 className="titleCards">{data.gameName}</h3>
            <div className="playersLists">{data.players}</div>
          </div>
          <div className="middleCards">
            <p>{data.state}</p>
            <p>
              {data.lengthPlayers}/{data.maxPlayers}
            </p>
            <p>{(data.private && 'private') || 'public'}</p>
          </div>
          <div className='rightCards' onClick={() => handleCardClick(data)}>
            <button>Join</button>
          </div>
        </div>
      ))}
    </div>
  )
}
