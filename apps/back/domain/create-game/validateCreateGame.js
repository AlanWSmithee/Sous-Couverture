// export function validateDataGames({playerName}) {
//   return gameName.length > 4;
// }

export function getErrorData ({namePlayer, gameName, maxPlayers}) {
    const arrayMessage = []
    if(namePlayer === '') {
        arrayMessage.push({message: 'le champ est vide', field: 'namePlayer'})
    }
    if(namePlayer.length < 4) {
        arrayMessage.push({message: 'il vous manque des lettres', field: 'namePlayer'})
    }
    
    if (gameName === "") {
      arrayMessage.push({ message: "le champ est vide", field: "gameName" });
    }
    if (gameName.length < 4) {
      arrayMessage.push({
        message: "il vous manque des lettres",
        field: "gameName",
      });
    }

    return arrayMessage
}