import { getListGameParty } from '@/domain/data-table/data-table.service'

export function AppDataDialog() {
  const dataTest = getListGameParty()

  return (
    <div className="">
      {dataTest.map((data) => (
        <div key={data.id} style={{border: 'solid 1px black', display: 'flex', margin: "10px"}}>
          <div
            style={{
              display: 'flex',
              padding: '5px',
              flexDirection: 'column',
              width: "70%",
            }}>
            <h3 style={{ marginRight: 'auto', marginTop: 'auto', height: "30%" }}>
              {data.gameName}
            </h3>
            <div style={{ marginRight: 'auto', height: "70%", display: "flex", alignItems: "center" }}>{data.players}</div>
          </div>
          <div
            style={{
              borderLeft: 'solid 1px black',
              display: 'flex',
              padding: '5px',
              flexDirection: 'column',
              marginLeft: 'auto',
              width: "30%"
            }}>
            <p>{data.state}</p>
            <p>{data.lengthPlayers}/{data.maxPlayers}</p>
            <p>{data.private && ("private") || ("public")}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
