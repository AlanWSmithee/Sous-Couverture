import { getListGameParty } from '@/domain/data-table/data-table.service'
import './data-table.css'
import { Dispatch, ReactNode, SetStateAction } from 'react'

type TypesDataTable = {
  children: ReactNode
}

export function AppDataDialog({children} : TypesDataTable) {
  const dataTest = getListGameParty()

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
          <div className='rightCards'>
            {children}
          </div>
        </div>
      ))}
    </div>
  )
}
