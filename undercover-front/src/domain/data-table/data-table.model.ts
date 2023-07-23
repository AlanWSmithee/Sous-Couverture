import { faker } from '@faker-js/faker'
import { Factory } from 'fishery'
import { UniqueEnforcer } from 'enforce-unique'
import { randomElementFromArray } from '@/core/utils/faker'
import { AppDataModel } from '@/component/data-table/app-data.model'

const uniqueId = new UniqueEnforcer()

export const fakePartyPlayer = Factory.define<AppDataModel>(() => {
  return {
    id: uniqueId.enforce(() => {
      return faker.string.uuid()
    }),
    gameName: faker.internet.domainWord(),
    state: randomElementFromArray(['waiting', 'in_progress', 'finish']),
    lengthPlayers: faker.number.int({ min: 1, max: 20 }),
    maxPlayers: faker.number.int({ min: 3, max: 20 }),
    players: players.buildList(9),
    private: faker.datatype.boolean(),
  }
})

const players = Factory.define<string>(() => {
  return faker.internet.userName()
})
