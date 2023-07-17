import { fakePartyPlayer } from "./data-table.model"

export function getListGameParty() {
    return fakePartyPlayer.buildList(6)
}