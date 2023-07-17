import { faker } from '@faker-js/faker'
import { Factory } from 'fishery'
import { UniqueEnforcer } from 'enforce-unique';

export interface PartyPlayer {
  id: string
  gameName: string
  state: 'waiting' | 'in_progress' | 'finish'
  lengthPlayers: number
  maxPlayers: number
  players: string[]
  private: boolean
}

const uniqueId = new UniqueEnforcer()


export const fakePartyPlayer = Factory.define<PartyPlayer>(() => {
  return {
    id: uniqueId.enforce(() => {
      return faker.string.uuid()
    }),
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
