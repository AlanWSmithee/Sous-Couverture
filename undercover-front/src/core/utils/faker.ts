export const randomElementFromArray = <T>(words: T[]): T => {
  return words[Math.floor(Math.random() * words.length)]
}
