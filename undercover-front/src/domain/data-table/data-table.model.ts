import { faker } from '@faker-js/faker'
import { Factory } from 'fishery'

export interface PartyPlayer {
  gameName: string
  state: 'waiting' | 'in_progress' | 'finish'
  lengthPlayers: number
  maxPlayers: number
  players: string[]
  private: boolean
}

export const fakePartyPlayer = Factory.define<PartyPlayer>(() => {
  return {
    gameName: faker.person.fullName(),
    state: 'waiting',
    lengthPlayers: faker.number.int({ min: 1, max: 20 }),
    maxPlayers: faker.number.int({ min: 3, max: 20 }),
    players: players.buildList(9),
    private: faker.datatype.boolean(),
  }
})

const players = Factory.define<string>(() => {
  return faker.person.fullName()
})
