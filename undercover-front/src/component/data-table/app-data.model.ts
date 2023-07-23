export interface AppDataModel {
  id: string
  gameName: string
  state: 'waiting' | 'in_progress' | 'finish'
  lengthPlayers: number
  maxPlayers: number
  players: string[]
  private: boolean
}
